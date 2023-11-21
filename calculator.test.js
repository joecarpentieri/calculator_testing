const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 100;
    actual = sum(25, 75);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -10;
    actual = sum(-5, -5);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 5;
    actual = sum(5, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract a small number from another small number', () => {
    expected = 10;
    actual = subtract(20, 10);
    expect(actual).toBe(expected);
  });

  test('can subtract a large number from a large number', () => {
    expected = 5000;
    actual = subtract(15000, 10000);
    expect(actual).toBe(expected);
  })

  test('can subtract a negative number from a positive number', () => {
    expected = 20;
    actual = subtract(10, -10);
    expect(actual).toBe(expected);
  })

  test('can subtract a positive number from a negative number', () => {
    expected = 50;
    actual = subtract(-50, 100);
  })

});

describe('multiply', () => {

  test('can multiply two small numbers together', () => {
    expected = 28;
    actual = multiply(4, 7);
    expect(actual).toBe(expected);
  })

  test('can multiply two larger numbers together', () => {
    expected = 300000;
    actual = multiply(5000, 60);
    expect(actual).toBe(expected);
  })

});

describe('divide', () => {

  test('can divide one small number by another small number', () => {
    expected = 4;
    actual = divide(28, 7);
    expect(actual).toBe(expected);
  })

  test('can divide a larger number by another large number', () => {
    expected = 6;
    actual = divide(1500, 250);
    expect(actual).toBe(expected);
  })

  test('can divide two negative numbers', () => {
    expected = 2.5;
    actual = divide(-5, -2);
    expect(actual).toBe(expected);
  })

  test('can divide a negative number by a positive number', () => {
    expected = -4;
    actual = divide(-16, 4);
    expect(actual).toBe(expected);
  })

});

describe('modulus', () => {

  test('can divide a number by another to return a remainder', () => {
    expected = 2;
    actual = modulus(5, 3);
    expect(actual).toBe(expected);
  })

  test('can divide a number by another to return no remainder', () => {
    expected = 0;
    actual = modulus(10, 2);
    expect(actual).toBe(expected);
  })

});

describe('even', () => {

  test('the number that will be inputted will return true, signifying it is an even number', () => {
    expected = true;
    actual = even(10);
    expect(actual).toBe(expected);
  });

  test('the number that will be inputted will return false, signifying it is an odd number', () => {
    expected = false;
    actual = even(9);
    expect(actual).toBe(expected);
  });

});

describe('odd', () => {

  test('the number inputted will return true, signifying it is an odd number', () => {
    expected = true;
    actual = odd(9);
    expect(actual).toBe(expected);
  })

  test('the number inputted will return false, signifying it is an even number', () => {
    expected = false;
    actual = odd(10);
    expect(actual).toBe(expected);
  })

});
