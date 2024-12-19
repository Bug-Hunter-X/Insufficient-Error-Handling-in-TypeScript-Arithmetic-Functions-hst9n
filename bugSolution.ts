function add(a: number, b: number): number {
  // Check for potential overflow
  if (a > Number.MAX_SAFE_INTEGER - b) {
    throw new Error('Addition overflow');
  }
  return a + b;
}

function subtract(a: number, b: number): number {
  // Check for potential underflow
  if (a < Number.MIN_SAFE_INTEGER + b) {
    throw new Error('Subtraction underflow');
  }
  return a - b;
}

function multiply(a: number, b: number): number {
  // Check for potential overflow
  if (a !== 0 && b > Number.MAX_SAFE_INTEGER / a) {
    throw new Error('Multiplication overflow');
  }
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

const result1 = add(5, 3); // result1 is 8
const result2 = subtract(10, 4); // result2 is 6
const result3 = multiply(7, 2); // result3 is 14
const result4 = divide(20, 5); // result4 is 4

console.log(result1,result2,result3,result4); // Output: 8 6 14 4