import { validateEmail } from './validateEmail';

describe(validateEmail, () => {
  it('should return false if empty', () => {
    const result = validateEmail('');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email contains quoted local part', () => {
    const result = validateEmail('“verylongname”@domain.com');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email contains quoted name', () => {
    const result = validateEmail('“name”@domain.com');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email have no dot and gTLDs', () => {
    const result = validateEmail('name@domain');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email no gTLDs', () => {
    const result = validateEmail('name@domain.');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email gTLDs is one symbol long', () => {
    const result = validateEmail('name@domain.c');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email gTLDs is more than 3 symbols long', () => {
    const result = validateEmail('“name”@domain.comc');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email domain contains special charachters', () => {
    const result = validateEmail('name@-domain._com');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email contains multiple @ symbols', () => {
    const result = validateEmail('name@domain@domain.com');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email is with an invalid IP address domain', () => {
    const result = validateEmail('name@123.123.123.1234');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email only a numeric domain', () => {
    const result = validateEmail('name@123');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email contains quoted name', () => {
    const result = validateEmail(' namedomain.com');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email with an extra @ symbol', () => {
    const result = validateEmail('name@domain@com');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email is missing . in the domain', () => {
    const result = validateEmail('name@domaincom');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email is consecutive. in the domain', () => {
    const result = validateEmail('name@domain..com');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email  with leading . in the domain', () => {
    const result = validateEmail('name@.domain.com');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email contains quoted name', () => {
    const result = validateEmail('“name”@domain.com');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email with trailing . in the domain', () => {
    const result = validateEmail('name@domain.com.');
    console.log('result', result);

    expect(result).toEqual(false);
  });


  it('should return false if email with leading – in local part', () => {
    const result = validateEmail('name@domain.-com');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email  with trailing – in local part', () => {
    const result = validateEmail('name@domain.com-');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email with consecutive .. in the domain', () => {
    const result = validateEmail('name@domain..com.');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email with a missing local part', () => {
    const result = validateEmail('@domain.com');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email with a missing domain', () => {
    const result = validateEmail('name@');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email with trailing _ in quoted local part', () => {
    const result = validateEmail('“name_”@domain.com');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email with leading _ in quoted local part', () => {
    const result = validateEmail('“_name”@domain.com');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email with trailing – in quoted local part', () => {
    const result = validateEmail('“name”@domain.com-');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email  with 2 periods in the domain and 2 consecutive periods and leading period', () => {
    const result = validateEmail('name@domain-.com');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if email with a period in quoted local part and trailing period', () => {
    const result = validateEmail('name.name.”@domain.com');
    console.log('result', result);

    expect(result).toEqual(false);
  });

  // true
  it('should return true if contains name, "@", domain, ".", "com/lv/eu', () => {
    const result = validateEmail('name@domain.com');
    console.log('result', result);

    expect(result).toEqual(true);
  });
  it('should return true if email contains a sub-domain', () => {
    const result = validateEmail('name@sub.domain.com');
    console.log('result', result);

    expect(result).toEqual(true);
  });
  it('should return true if email contains IP address domain', () => {
    const result = validateEmail('name@123.123.123.123');
    console.log('result', result);

    expect(result).toEqual(true);
  });
  it('should return false if email contains quoted name', () => {
    const result = validateEmail('“name”@domain.com');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return true if email contains local part longer than 64 characters', () => {
    const result = validateEmail('verylongname@domain.com');
    console.log('result', result);

    expect(result).toEqual(true);
  });
  it('should return true if email contains  domain part longer than 255 characters', () => {
    const result = validateEmail('name@verylongdomainpart.com');
    console.log('result', result);

    expect(result).toEqual(true);
  });
});
