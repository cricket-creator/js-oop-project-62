import ValidationSchema from "./ValidationSchema.js";

class StringValidationSchema extends ValidationSchema {
  required() {
    this.addValidation("required", (value) => !!value);
    return this;
  }

  minLength(length) {
    this.addValidation("minLength", (value) => value?.length >= length);
    return this;
  }

  contains(text) {
    this.addValidation("contains", (value) => value?.includes(text));
    return this;
  }
}

export default StringValidationSchema;
