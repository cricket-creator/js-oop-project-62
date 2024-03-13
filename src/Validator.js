import ArrayValidationSchema from "./ArrayValidationSchema.js";
import NumberValidationSchema from "./NumberValidationSchema.js";
import StringValidationSchema from "./StringValidationSchema.js";

class Validator {
  string() {
    return new StringValidationSchema(this);
  }

  number() {
    return new NumberValidationSchema(this);
  }

  array() {
    return new ArrayValidationSchema(this);
  }
}

export default Validator;
