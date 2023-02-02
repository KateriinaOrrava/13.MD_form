const validateEmail = (inputEmail:string) => {
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (validEmail.test(inputEmail)) {
    return true;
  }
  return false;
};

// eslint-disable-next-line import/prefer-default-export
export { validateEmail };
