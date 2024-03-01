import NumberValidationSchema from "./NumberValidationSchema.js";
import StringValidationSchema from "./StringValidationSchema.js";

class Validator {
  string() {
    return new StringValidationSchema(this);
  }

  number() {
    return new NumberValidationSchema(this);
  }
}

export default Validator;
