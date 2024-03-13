import ArrayValidationSchema from './ArrayValidationSchema.js';
import NumberValidationSchema from './NumberValidationSchema.js';
import ObjectValidationSchema from './ObjectValidationSchema.js';
import StringValidationSchema from './StringValidationSchema.js';

class Validator {
  constructor() {
    this.customValidator = new Map();
  }

  string() {
    return new StringValidationSchema(this);
  }

  number() {
    return new NumberValidationSchema(this);
  }

  array() {
    return new ArrayValidationSchema(this);
  }

  object() {
    return new ObjectValidationSchema(this);
  }

  addValidator(schemaName, methodName, validationFn) {
    this.customValidator.set(schemaName, {
      ...this.customValidator.get(schemaName),
      [methodName]: validationFn,
    });
  }
}

export default Validator;
