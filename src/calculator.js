#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
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
    default:
      throw new Error(`Unknown operation '${operation}'. Use +, -, *, or /`);
  }

  return result;
};

// CLI Entry Point
if (require.main === module && args.length < 3) {
  console.log(`
Node.js CLI Calculator
Supported Operations: Addition (+), Subtraction (-), Multiplication (*), Division (/)

Usage:
  node calculator.js <number1> <operation> <number2>

Examples:
  node calculator.js 10 + 5      # Addition: 15
  node calculator.js 10 - 3      # Subtraction: 7
  node calculator.js 10 * 2      # Multiplication: 20
  node calculator.js 10 / 2      # Division: 5
  `);
  process.exit(0);
}

if (require.main === module) {
  try {
    const result = calculate(args[0], args[1], args[2]);
    console.log(`${args[0]} ${args[1]} ${args[2]} = ${result}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

// Export functions for use as a module
module.exports = { add, subtract, multiply, divide, calculate };
