const { add, subtract, multiply, divide, calculate } = require('../calculator');

describe('Calculator Functions', () => {
  
  // ============================================
  // Addition Tests
  // ============================================
  describe('Addition (add)', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add zero to a number', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('should add two zeros', () => {
      expect(add(0, 0)).toBe(0);
    });

    test('should handle decimal numbers', () => {
      expect(add(2.5, 3.5)).toBe(6);
    });

    test('should add large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  // ============================================
  // Subtraction Tests
  // ============================================
  describe('Subtraction (subtract)', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract a larger number from a smaller one (result in negative)', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should subtract a negative number (like adding)', () => {
      expect(subtract(10, -5)).toBe(15);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should subtract zero from a number', () => {
      expect(subtract(5, 0)).toBe(5);
    });

    test('should subtract a number from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should handle decimal numbers', () => {
      expect(subtract(10.5, 4.5)).toBe(6);
    });

    test('should subtract itself to get zero', () => {
      expect(subtract(42, 42)).toBe(0);
    });
  });

  // ============================================
  // Multiplication Tests
  // ============================================
  describe('Multiplication (multiply)', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-4, -5)).toBe(20);
    });

    test('should multiply by zero (result in zero)', () => {
      expect(multiply(100, 0)).toBe(0);
    });

    test('should multiply zero by zero', () => {
      expect(multiply(0, 0)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(42, 1)).toBe(42);
    });

    test('should handle decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply large numbers', () => {
      expect(multiply(1000, 1000)).toBe(1000000);
    });
  });

  // ============================================
  // Division Tests
  // ============================================
  describe('Division (divide)', () => {
    test('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide with decimal result', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    test('should divide positive by negative', () => {
      expect(divide(20, -4)).toBe(-5);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-20, -4)).toBe(5);
    });

    test('should divide zero by a number (result in zero)', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should divide a number by one', () => {
      expect(divide(42, 1)).toBe(42);
    });

    test('should divide by negative one', () => {
      expect(divide(42, -1)).toBe(-42);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Error: Division by zero is not allowed');
    });

    test('should throw error when dividing negative by zero', () => {
      expect(() => divide(-10, 0)).toThrow('Error: Division by zero is not allowed');
    });

    test('should throw error when dividing zero by zero', () => {
      expect(() => divide(0, 0)).toThrow('Error: Division by zero is not allowed');
    });

    test('should handle decimal division', () => {
      expect(divide(7.5, 2.5)).toBe(3);
    });

    test('should divide large numbers', () => {
      expect(divide(1000000, 1000)).toBe(1000);
    });
  });

  // ============================================
  // Calculate Function Tests
  // ============================================
  describe('Calculate Function', () => {
    test('should calculate addition with + operator', () => {
      expect(calculate('2', '+', '3')).toBe(5);
    });

    test('should calculate subtraction with - operator', () => {
      expect(calculate('10', '-', '4')).toBe(6);
    });

    test('should calculate multiplication with * operator', () => {
      expect(calculate('45', '*', '2')).toBe(90);
    });

    test('should calculate division with / operator', () => {
      expect(calculate('20', '/', '5')).toBe(4);
    });

    test('should support word operators (add)', () => {
      expect(calculate('5', 'add', '3')).toBe(8);
    });

    test('should support word operators (subtract)', () => {
      expect(calculate('10', 'subtract', '4')).toBe(6);
    });

    test('should support word operators (multiply)', () => {
      expect(calculate('6', 'multiply', '7')).toBe(42);
    });

    test('should support word operators (divide)', () => {
      expect(calculate('30', 'divide', '5')).toBe(6);
    });

    test('should throw error for unknown operation', () => {
      expect(() => calculate('5', '%', '3')).toThrow();
    });

    test('should throw error for invalid number input', () => {
      expect(() => calculate('abc', '+', '5')).toThrow();
    });

    test('should throw error when both arguments are invalid', () => {
      expect(() => calculate('abc', '+', 'xyz')).toThrow();
    });
  });

  // ============================================
  // Edge Cases and Special Scenarios
  // ============================================
  describe('Edge Cases', () => {
    test('should handle very small decimal numbers', () => {
      expect(divide(0.0001, 0.0001)).toBe(1);
    });

    test('should handle operations with very large numbers', () => {
      expect(add(9999999999, 1)).toBe(10000000000);
    });

    test('should maintain precision in complex calculations', () => {
      const result = calculate('100', '+', '200');
      const divided = divide(result, 3);
      expect(divided).toBeCloseTo(100, 5);
    });

    test('should handle negative zero correctly', () => {
      expect(subtract(5, 5)).toBe(0);
    });

    test('should chain multiple operations correctly', () => {
      const step1 = add(2, 3); // 5
      const step2 = multiply(step1, 2); // 10
      const step3 = divide(step2, 5); // 2
      expect(step3).toBe(2);
    });
  });
});
