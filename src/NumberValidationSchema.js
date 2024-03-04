import ValidationSchema from "./ValidationSchema.js";

class NumberValidationSchema extends ValidationSchema {
  required() {
    this.addValidation("required", (value) => !!value || value === 0);
    return this;
  }

  positive() {
    this.addValidation("positive", (value) => value > 0);
    return this;
  }

  range(start, end) {
    this.addValidation("range", (value) => value >= start && value <= end);
    return this;
  }

  isValid(value) {
    return this.validate(value);
  }
}

export default NumberValidationSchema;