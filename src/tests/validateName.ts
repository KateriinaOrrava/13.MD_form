/* eslint-disable import/prefer-default-export */

const validateName = (inputName:string) => {
  const validName = /^[\p{L}\p{M}]{2,50}$/u;
  if (validName.test(inputName)) {
    return true;
  }
  return false;
};

export { validateName };
