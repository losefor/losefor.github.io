import client from "./client";
import { setToken } from "../auth/Storage";

const signupCustomer = async (values) => {
  const { name, email, password } = values;
  
  const response = await client.post("/auth/signup/user", {
    name,
    email,
    password,
  });
  return response
};

const signinCustomer = async (values) => {
  const { email, password } = values;
  console.log(email, password);
  const response = await client.post("/auth/login/user", {
    email,
    password,
  });
  const { token } = response.data;

  if (!response.ok) return;
  if (response.data.status == "success") {
    console.log(token);
    setToken(token);
    return response.data 
  }else{
    return response.data
  }
};

export default {
  signinCustomer,
  signupCustomer,
};
