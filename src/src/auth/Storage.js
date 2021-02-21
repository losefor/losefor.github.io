export const setToken = async (token) => {
  return await localStorage.setItem("token", token);
};

export const getToken = async () => {
  return await localStorage.getItem("token");
};

export const removeToken = async () => {
  await localStorage.removeItem("token");
};
