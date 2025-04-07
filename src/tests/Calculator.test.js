import { describe, it, expect } from 'vitest';
import CalculatorModel from '../model/CalculatorModel';

describe('CalculatorModel', () => {
  it('should initialize with default values', () => {
    const calc = new CalculatorModel();
    expect(calc.value).toBe('0');
    expect(calc.completeOperation).toBe('  ');
  });

  it('should add numbers correctly', () => {
    const calc = new CalculatorModel().textNumber('5');
    expect(calc.value).toBe('5');

    const updatedCalc = calc.textNumber('3');
    expect(updatedCalc.value).toBe('53');
  });

  it('should add a decimal point correctly', () => {
    const calc = new CalculatorModel().textNumber('5');
    expect(calc.value).toBe('5');

    const calcWithDot = calc.addDot();
    expect(calcWithDot.value).toBe('5,');
  });

  it('should clear the screen correctly', () => {
    const calc = new CalculatorModel().textNumber('9').clearScreen();
    expect(calc.value).toBe('0');
    expect(calc.completeOperation).toBe('  ');
  });

  it('should correctly calculate mathematical operations', () => {
    const calc = new CalculatorModel('5', 5, '+').textOperation(null);
    expect(calc.value).toBe('10');
  });

  it('should support multiples operations in sequence', () => {
    let calc = new CalculatorModel();
    calc = calc.textNumber(5).textOperation('*').textNumber(2).calculate();
    calc = calc.textOperation('+').textNumber(10).calculate();
    calc = calc.textOperation('-').textNumber(5).calculate();
    calc = calc.textOperation('/').textNumber(3).calculate();
    expect(calc.value).toBe('5');
  });
});
