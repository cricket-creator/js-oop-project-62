class ValidationSchema {
  constructor(validator) {
    this.validator = validator;
    this.validations = new Map();
  }

  addValidation(key, validationFn) {
    this.validations.set(key, validationFn);
  }

  validate(value) {
    const entries = [...this.validations];
    return entries.every(([key, validationFn]) => {
      const validationResult = validationFn(value);
      if (!validationResult) {
        console.log(`${key}: ${String(validationFn)} error!`);
      }
      return validationResult;
    });
  }

  isValid(value) {
    return this.validate(value);
  }
}

export default ValidationSchema;
