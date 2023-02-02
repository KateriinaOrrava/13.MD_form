import { validatePassword } from './validatePassword';

describe(validatePassword, () => {
  // false
  it('should return false if empty', () => {
    const result = validatePassword('');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if does not contain at least one numeric digit', () => {
    const result = validatePassword('abcdefghigkl');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if does not contain at least special character', () => {
    const result = validatePassword('abcdefghigkl');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if contains only special characters', () => {
    const result = validatePassword('%%##$$&&**');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if contains only numeric digits', () => {
    const result = validatePassword('111222333');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if contains only letters', () => {
    const result = validatePassword('aabbccddee');
    console.log('result', result);

    expect(result).toEqual(false);
  });


  // true
  it('should return true if contains 8 symbols', () => {
    const result = validatePassword('Hahaha1$');
    console.log('result', result);

    expect(result).toEqual(true);
  });

  it('should return true if contains more than 8 symbols', () => {
    const result = validatePassword('Hahaha1$2');
    console.log('result', result);

    expect(result).toEqual(true);
  });
  it('should return true if contain at least one numeric digit', () => {
    const result = validatePassword('Hahaha1$p');
    console.log('result', result);

    expect(result).toEqual(true);
  });
  it('should return true if contain at least one special character', () => {
    const result = validatePassword('Hahaha1$p');
    console.log('result', result);

    expect(result).toEqual(true);
  });
  it('should return true if contain more than one numeric digit', () => {
    const result = validatePassword('Hahaha1$51');
    console.log('result', result);

    expect(result).toEqual(true);
  });
  it('should return true if contain more than one special character', () => {
    const result = validatePassword('Hahaha1$$');
    console.log('result', result);

    expect(result).toEqual(true);
  });
  it('should return true if contain more than one letter, one special character, one numeric digit', () => {
    const result = validatePassword('Hahahabvfbf1$');
    console.log('result', result);

    expect(result).toEqual(true);
  });
  it('should return true if contain one letter and rest are special characters and numeric digit', () => {
    const result = validatePassword('aA1!2@3#5%61$');
    console.log('result', result);

    expect(result).toEqual(true);
  });
});
