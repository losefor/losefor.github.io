import { useState } from "react";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { setToken } from "../src/auth/Storage";

import Formik from "../src/components/Form/Formik";
import FormTextInput from "../src/components/Form/FormTextInput";
import FormButton from "../src/components/Form/FormButton";

import View from "../src/components/View";
import Text from "../src/components/Text";
import BackButton from "../src/components/BackButton";
import Alert from "../src/components/Alert";
import Spinner from "../src/components/Spinner";

// import constants from "../src/utils/variables";
import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../src/config/colors";

export default function add() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({
    isOpen: false,
    color: "danger",
    label: "some thing went wrong",
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("يرجى التاكد من الايميل")
      .required("الايميل الخاص بك مطلوب"),
    password: Yup.string().required().min(8, "pass must more than 8"),
  });

  const submitHandler = async (data) => {
    console.log(data);
    setIsLoading(true);
    const response = await axios.post(`https://coursaty-backend.herokuapp.com/auth/login`, data);
    setIsLoading(false);
    console.log(response);
    if (response.data.status == "fail") {
      setAlert({
        isOpen: true,
        color: "danger",
        label: "لقد حصل خطا ما",
      });
    } else if (response.data.status == "success") {
      setAlert({
        isOpen: true,
        color: "success",
        label: "تم تسجيل الدخول بنجاح",
      });
      await setToken(response.data.token);
      // useSetToken(response.data.token);
      setTimeout(() => router.push("/"), 3000);
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
        text={alert.label}
        type={alert.color}
        open={alert.isOpen}
      />
      <BackButton />
      <View display="flex" flexDirection="column">
        <View mv={5}>
          <Text color="#303030" textAlign="center" fontSize={3}>
            تسجيل الدخول
          </Text>
        </View>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={submitHandler}
        >
          <FormTextInput type="email" name="email" label="ايميل المدرس" />
          <FormTextInput type="password" name="password" label="الرمز السري" />

          <View mv={2} display='flex' justifyContent='flex-end'>
            <FormButton 
            label="تسجيل الدخول" 
            color={colors.white} 
            backgroundColor={colors.primary} 
             />
          </View>

          <Text textAlign="right">
            ليس لديك حساب ؟<Link href="./signup">انشاء حساب</Link>
          </Text>
          <Spinner isLoading={isLoading} />
        </Formik>
      </View>
    </div>
  );
}
