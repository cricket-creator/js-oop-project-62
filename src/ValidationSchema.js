class ValidationSchema {
  constructor(validator) {
    this.validator = validator;
    this.validations = new Map();
  }

  addValidation(key, validationFn) {
    this.validations.set(key, validationFn);
  }

  test(methodName, comparisonValue) {
    const customMethod = this.validator.customValidator.get(this.schemaName);
    this.addValidation(methodName, (value) => {
      const validationFn = customMethod[methodName];
      if (!validationFn) {
        throw new Error(`${methodName} method doesn't exist`);
      }
      return validationFn(value, comparisonValue);
    });
    return this;
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
