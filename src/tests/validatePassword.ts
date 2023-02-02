const validatePassword = (inputPassword:string) => {
  const validPassword = /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/u;
  if (validPassword.test(inputPassword)) {
    return true;
  }
  return false;
};

// eslint-disable-next-line import/prefer-default-export
export { validatePassword };
