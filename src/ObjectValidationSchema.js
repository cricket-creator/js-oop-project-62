import ValidationSchema from "./ValidationSchema.js";

class ObjectValidationSchema extends ValidationSchema {
  schemaName = "object";

  shape(validationSchema) {
    this.addValidation("shape", (object) => {
      const keys = Object.keys(object);
      return keys.every((key) => {
        if (!Object.hasOwn(validationSchema, key)) {
          return false;
        }
        const schema = validationSchema[key];
        return schema ? schema.isValid(object[key]) : false;
      });
    });
    return this;
  }
}

export default ObjectValidationSchema;
