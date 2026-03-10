#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Power/Exponentiation (^)
 * - Square Root (sqrt)
 */

const args = process.argv.slice(2);

// Function to perform addition
const add = (a, b) => {
  return a + b;
};

// Function to perform subtraction
const subtract = (a, b) => {
  return a - b;
};

// Function to perform multiplication
const multiply = (a, b) => {
  return a * b;
};

// Function to perform division
const divide = (a, b) => {
  if (b === 0) {
    throw new Error('Error: Division by zero is not allowed');
  }
  return a / b;
};

// Function to perform modulo (remainder)
const modulo = (a, b) => {
  if (b === 0) {
    throw new Error('Error: Modulo by zero is not allowed');
  }
  return a % b;
};

// Function to perform power/exponentiation
const power = (base, exponent) => {
  return Math.pow(base, exponent);
};

// Function to perform square root
const squareRoot = (n) => {
  if (n < 0) {
    throw new Error('Error: Square root of negative numbers is not allowed');
  }
  return Math.sqrt(n);
};

// Main calculator function
const calculate = (num1, operation, num2) => {
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  if (isNaN(a) || isNaN(b)) {
    throw new Error('Error: Both arguments must be valid numbers');
  }

  let result;

  switch (operation) {
    case '+':
    case 'add':
      result = add(a, b);
      break;
    case '-':
    case 'subtract':
      result = subtract(a, b);
      break;
    case '*':
    case 'multiply':
      result = multiply(a, b);
      break;
    case '/':
    case 'divide':
      result = divide(a, b);
      break;
    case '%':
    case 'modulo':
      result = modulo(a, b);
      break;
    case '^':
    case 'power':
      result = power(a, b);
      break;
    case 'sqrt':
      result = squareRoot(a);
      break;
    default:
      throw new Error(`Unknown operation '${operation}'. Use +, -, *, /, %, ^, or sqrt`);
  }

  return result;
};

// CLI Entry Point
if (require.main === module && args.length === 0) {
  console.log(`
Node.js CLI Calculator
Supported Operations: Addition (+), Subtraction (-), Multiplication (*), Division (/), Modulo (%), Power (^), Square Root (sqrt)

Usage:
  node calculator.js <number1> <operation> <number2>
  node calculator.js <number> sqrt

Examples:
  node calculator.js 10 + 5      # Addition: 15
  node calculator.js 10 - 3      # Subtraction: 7
  node calculator.js 10 '*' 2    # Multiplication: 20
  node calculator.js 10 / 2      # Division: 5
  node calculator.js 10 '%' 3    # Modulo: 1
  node calculator.js 2 '^' 3     # Power: 8
  node calculator.js 16 sqrt     # Square Root: 4
  `);
  process.exit(0);
}

if (require.main === module) {
  try {
    // Special handling for sqrt (single argument)
    if (args[1] === 'sqrt' && args.length === 2) {
      const result = squareRoot(parseFloat(args[0]));
      console.log(`sqrt(${args[0]}) = ${result}`);
    } else if (args.length >= 3) {
      const result = calculate(args[0], args[1], args[2]);
      console.log(`${args[0]} ${args[1]} ${args[2]} = ${result}`);
    } else {
      throw new Error('Invalid number of arguments');
    }
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

// Export functions for use as a module
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot, calculate };
