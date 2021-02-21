import { create } from "apisauce";
import { getToken } from "../auth/Storage";

const client = create({
  baseURL: "https://coursaty-backend.herokuapp.com",
});

client.addAsyncRequestTransform(async function change(request) {
  const token = await getToken();
  if (!token) return;
  request.headers["token"] = token;
});

export default client;
