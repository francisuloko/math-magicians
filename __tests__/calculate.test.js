import calculate from '../../logic/calculate';

let calcObj = {};

beforeEach(() => {
  calcObj = {};
});

describe('Addition Tests', () => {
  test('Sum of integers', () => {
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '+');
    calcObj = calculate(calcObj, '8');
    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).toBe(9);
  });

  test('Sum of decimals', () => {
    calcObj = calculate(calcObj, '4');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '1');

    calcObj = calculate(calcObj, '+');

    calcObj = calculate(calcObj, '4');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '1');

    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).toBe(8.2);
  });
});

describe('Subtraction Tests', () => {
  test('Subtraction of integers', () => {
    calcObj = calculate(calcObj, '7');
    calcObj = calculate(calcObj, '-');
    calcObj = calculate(calcObj, '20');
    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).toBe(-13);
  });

  test('Subtraction of decimals', () => {
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '2');

    calcObj = calculate(calcObj, '-');

    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '7');

    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).toBe(-1.5);
  });
});

describe('Multiplication Test', () => {
  test('Multiplication of Integers', () => {
    calcObj = calculate(calcObj, '4');

    calcObj = calculate(calcObj, 'x');

    calcObj = calculate(calcObj, '20');

    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).toBe(80);
  });

  test('Multiplication Decimals', () => {
    calcObj = calculate(calcObj, '3');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '9');

    calcObj = calculate(calcObj, 'x');

    calcObj = calculate(calcObj, '45');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '3');

    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).toBe(176.67);
  });
});

describe('Division Tests', () => {
  test('Division of Integers', () => {
    calcObj = calculate(calcObj, '6');

    calcObj = calculate(calcObj, '÷');

    calcObj = calculate(calcObj, '3');

    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).toBe(2);
  });

  test('Division of Decimals', () => {
    calcObj = calculate(calcObj, '0');

    calcObj = calculate(calcObj, '÷');

    calcObj = calculate(calcObj, '1600');

    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).toBe(0);
  });

  test('Zero Division', () => {
    calcObj = calculate(calcObj, '3');

    calcObj = calculate(calcObj, '÷');

    calcObj = calculate(calcObj, '0');

    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).not.toBe('Can\'t divide by 0.');
  });
});
