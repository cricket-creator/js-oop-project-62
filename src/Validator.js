import ArrayValidationSchema from "./ArrayValidationSchema.js";
import NumberValidationSchema from "./NumberValidationSchema.js";
import ObjectValidationSchema from "./ObjectValidationSchema.js";
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

  object() {
    return new ObjectValidationSchema(this);
  }
}

export default Validator;
