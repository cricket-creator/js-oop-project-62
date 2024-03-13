import ValidationSchema from './ValidationSchema.js';

class ArrayValidationSchema extends ValidationSchema {
  constructor(validator) {
    super(validator);
    this.schemaName = 'array';
  }

  required() {
    this.addValidation('required', (value) => Array.isArray(value));
    return this;
  }

  sizeof(length) {
    this.addValidation('sizeof', (value) => value?.length === length);
    return this;
  }
}

export default ArrayValidationSchema;
