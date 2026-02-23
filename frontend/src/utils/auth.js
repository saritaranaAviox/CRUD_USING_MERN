export const getAccessToken = () => {
  const encryptedtoken = localStorage.getItem("access_token");
  return encryptedtoken ? decrypt(encryptedtoken) : "";
};