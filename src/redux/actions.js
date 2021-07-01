export const Token = "Token";

//Function
export const setToken = tokenString => {
  return { type: Token, token: tokenString };
};
