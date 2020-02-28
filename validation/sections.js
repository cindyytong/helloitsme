const Validator = require("validator");
const validText = require("./valid-text");

// model level validations

module.exports = function validateSectionInput(data) {
  let errors = {};
  // check the input values for the model and add errors to the errors object
  data.text = validText(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 100})) {
    errors.text = "text must be at least 100 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "text field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
