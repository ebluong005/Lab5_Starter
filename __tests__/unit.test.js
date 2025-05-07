// unit.test.js

  import {
    isPhoneNumber,
    isEmail,
    isStrongPassword,
    isDate,
    isHexColor,
  } from '../code-to-unit-test/unit-test-me';

  // TODO - Part 2`
  describe('Phone Number Validation', () => {
    // Tests that should return true
    test('isPhoneNumber should return true for standard format: 123-456-7890', () => {
      expect(isPhoneNumber('123-456-7890')).toBe(true);
    });
    
    test('isPhoneNumber should return true for format with parentheses: (123) 456-7890', () => {
      expect(isPhoneNumber('(123) 456-7890')).toBe(true);
    });
    
    // Tests that should return false
    test('isPhoneNumber should return false for invalid format: 1234567890', () => {
      expect(isPhoneNumber('1234567890')).toBe(false);
    });
    
    test('isPhoneNumber should return false for incomplete number: 123-456', () => {
      expect(isPhoneNumber('123-456')).toBe(false);
    });
  });
  
  describe('Email Validation', () => {
    // Tests that should return true
    test('isEmail should return true for valid email: user@domain.com', () => {
      expect(isEmail('user@domain.com')).toBe(true);
    });
    
    test('isEmail should return true for valid email with numbers: user123@domain.com', () => {
      expect(isEmail('user123@domain.com')).toBe(true);
    });
    
    // Tests that should return false
    test('isEmail should return false for email missing domain: user@.com', () => {
      expect(isEmail('user@.com')).toBe(false);
    });
    
    test('isEmail should return false for email with invalid characters: user@domain.c@m', () => {
      expect(isEmail('user@domain.c@m')).toBe(false);
    });
  });
  
  describe('Password Strength Validation', () => {
    // Tests that should return true
    test('isStrongPassword should return true for valid password: a123_', () => {
      expect(isStrongPassword('a123_')).toBe(true);
    });
    
    test('isStrongPassword should return true for valid password with max length: a12345678901234', () => {
      expect(isStrongPassword('a12345678901234')).toBe(true);
    });
    
    // Tests that should return false
    test('isStrongPassword should return false when starting with non-letter: 1abcd', () => {
      expect(isStrongPassword('1abcd')).toBe(false);
    });
    
    test('isStrongPassword should return false when too long: abcdefghijklmnop', () => {
      expect(isStrongPassword('abcdefghijklmnop')).toBe(false);
    });
  });
  
  describe('Date Validation', () => {
    // Tests that should return true
    test('isDate should return true for date format MM/DD/YYYY: 12/31/2023', () => {
      expect(isDate('12/31/2023')).toBe(true);
    });
    
    test('isDate should return true for date format M/D/YYYY: 1/1/2023', () => {
      expect(isDate('1/1/2023')).toBe(true);
    });
    
    // Tests that should return false
    test('isDate should return false for invalid date format: 2023/12/31', () => {
      expect(isDate('2023/12/31')).toBe(false);
    });
    
    test('isDate should return false for date with dashes: 12-31-2023', () => {
      expect(isDate('12-31-2023')).toBe(false);
    });
  });
  
  describe('Hex Color Validation', () => {
    // Tests that should return true
    test('isHexColor should return true for 3-character hex code: #abc', () => {
      expect(isHexColor('#abc')).toBe(true);
    });
    
    test('isHexColor should return true for 6-character hex code: #123456', () => {
      expect(isHexColor('#123456')).toBe(true);
    });
    
    // Tests that should return false
    test('isHexColor should return false for invalid hex code: #ght', () => {
      expect(isHexColor('#ght')).toBe(false);
    });
    
    test('isHexColor should return false for hex code with wrong length: #12345', () => {
      expect(isHexColor('#12345')).toBe(false);
    });
  });