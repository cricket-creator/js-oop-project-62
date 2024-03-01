import StringValidationSchema from "./StringValidationSchema.js";

class Validator {
  string() {
    return new StringValidationSchema(this);
  }
}

export default Validator;
