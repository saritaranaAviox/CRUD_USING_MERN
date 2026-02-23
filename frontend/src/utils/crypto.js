export const encrypt = (token) => {
  if (!token) return "";

  try {
    return btoa(token);
  } catch (error) {
    console.error("Token encoding failed:", error);
    return token; // fallback
  }
};

export const decrypt = (encryptedToken) => {
  if (!encryptedToken) return "";

  try {
    return atob(encryptedToken);
  } catch {
    // If already plain token
    return encryptedToken;
  }
};