import { validateName } from './validateName';

describe(validateName, () => {
  it('should return false if empty', () => {
    const result = validateName('');
    console.log('result', result);

    expect(result).toEqual(false);
  });

  it('should return false if more than 50 characters', () => {
    const result = validateName('ahsajsejsjahsjfldskjsajdnadfsadsappppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp');
    console.log('result', result);

    expect(result).toEqual(false);
  });

  it('should return false if contains digits', () => {
    const result = validateName('123aaa');
    console.log('result', result);

    expect(result).toEqual(false);
  });

  it('should return false if contains simbols#', () => {
    const result = validateName('qwe#wqe1');
    console.log('result', result);

    expect(result).toEqual(false);
  });

  it('should return false if contains simbols@', () => {
    const result = validateName('qwe@wqe1');
    console.log('result', result);

    expect(result).toEqual(false);
  });
  it('should return false if contains simbolsv\'', () => {
    const result = validateName('qwe\'wqe1');
    console.log('result', result);

    expect(result).toEqual(false);
  });

  it('should return false if contains blankspace at the end', () => {
    const result = validateName('qwewe ');
    console.log('result', result);

    expect(result).toEqual(false);
  });

  it('should return false if contains blankspace in front', () => {
    const result = validateName(' qwewqe');
    console.log('result', result);

    expect(result).toEqual(false);
  });

  it('should return false if contains blankspace in the middle', () => {
    const result = validateName('qwew qe');
    console.log('result', result);

    expect(result).toEqual(false);
  });

  it('should return true if contains more than 1 letter', () => {
    const result = validateName('qe');
    console.log('result', result);

    expect(result).toEqual(true);
  });

  it('should return true if contains Latvian letters', () => {
    const result = validateName('Katerīna');
    console.log('result', result);

    expect(result).toEqual(true);
  });
});
