import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Yup from "yup";
import axios from "axios";

import Formik from "../src/components/Form/Formik";
import FormTextInput from "../src/components/Form/FormTextInput";
import FormButton from "../src/components/Form/FormButton";
import FormPicker from "../src/components/Form/FormPicker";

import View from "../src/components/View";
import Text from "../src/components/Text";
import BackButton from "../src/components/BackButton";
import Alert from "../src/components/Alert";

import {logEvent} from '../utils/analytics'
// import constants , {departments , stages} from "../../assets/utils/variables";

export default function add() {
  const router = useRouter();

  const [alert, setAlert] = useState({
    isOpen: false,
    color: "danger",
    label: "some thing went wrong",
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "الاسم قصير جداً")
      .max(50, "الاسم طويل جدا")
      .required("اسم الطالب مطلوب"),
    email: Yup.string()
      .email("يرجى التاكد من الايميل")
      .required("الايميل الخاص بالطالب مطلوب"),
    password: Yup.string()
      .required("الرمز السري مطلوب")
      .min(8, "pass must more than 8"),
  });

  const submitHandler = async (data) => {
    console.log(data);

    const response = await axios.post(
      `https://coursaty-backend.herokuapp.com/auth/signup`,
      data
    );
    console.log(response);

    if (response.data.status === "fail") {
      return setAlert({
        isOpen: true,
        color: "danger",
        label: "هذا الايميل مستخدم بالفعل",
      });
    }

    if (response.data.status === "success") {
      setAlert({
        isOpen: true,
        color: "success",
        label: "تم انشاء الحساب",
      });
      logEvent('Acoount' , 'New account generated')
      // useSetToken(response.data.token)
      setTimeout(() => router.push("/login"), 3000);
    }
  };

  const alertCloseHandler = () => {
    setAlert((data) => {
      return {
        ...data,
        isOpen: false,
      };
    });
  };

  return (
    <div className="center">
      <Alert
        onClose={alertCloseHandler}
        open={alert.isOpen}
        type={alert.color}
        text={alert.label}
      />
      <BackButton />
      <View display="flex" flexDirection="column" alignItems="center">
        <View mv={5}>
          <Text color="#303030" textAlign="center" fontSize={3}>
            انشاء حساب
          </Text>
        </View>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={submitHandler}
        >
          {/* <View > */}

          <FormTextInput name="name" label="اسم المدرس" />
          <FormTextInput name="email" label="ايميل المدرس" />
          <FormTextInput name="password" label="الرمز السري" />
          {/* </View> */}

          <View mv={2}>
            <FormButton label="انشاء حساب" color="success" rounded />
          </View>

          <Text textAlign="right">
            لديك حساب ؟<Link href="./login">سجل دخول</Link>
          </Text>
        </Formik>
      </View>
    </div>
  );
}
