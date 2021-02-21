import { useState } from "react";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { setToken } from "../../src/auth/Storage";

import Formik from "../../src/components/Form/Formik";
import FormTextInput from "../../src/components/Form/FormTextInput";
import FormButton from "../../src/components/Form/FormButton";
import FormPicker from "../../src/components/Form/FormPicker";

import View from "../../src/components/View";
import Text from "../../src/components/Text";
import BackButton from "../../src/components/BackButton";
import Alert from "../../src/components/Alert";
import Spinner from "../../src/components/Spinner";

// import constants from "../src/utils/variables";
import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../src/config/colors";

export default function add() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({
    isOpen: false,
    color: "danger",
    label: "some thing went wrong",
  });

  const initialValues = {
    title: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("the title is required"),
    description: Yup.string()
    .required('the description is required')
    .min(20, "the description must above 20 letters")
    .max(500 , 'the description must be less than 500 letters')
  });

  const submitHandler = async (data) => {
    console.log(data)
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
      {/* <BackButton /> */}
      <View display="flex" flexDirection="column">
        <View mv={5}>
          <Text color="#303030" textAlign="center" fontSize={3}>
            انشاء كورس جديد
          </Text>
        </View>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={submitHandler}
        >
          <FormTextInput type="text" name="title" label="Title" />
          <FormTextInput type="text" name="description" label="description" />
          <FormPicker label='gategory' items={[{name:'medical'}]}/>
          <FormPicker label='stage' items={[{name:'first'}]}/>

          <View mv={2} display='flex' justifyContent='flex-end'>
            <FormButton 
            label="تسجيل الدخول" 
            color={colors.white} 
            backgroundColor={colors.primary} 
             />
          </View>

          
          <Spinner isLoading={isLoading} />
        </Formik>
      </View>
    </div>
  );
}
