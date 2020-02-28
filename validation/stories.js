const Validator = require('validator');
const validText = require('./valid-text');

// model level validations 

module.exports = function validateStoryInput(data) {
    let errors = {};
    // check the input values for the model and add errors to the errors object
    data.title = validText(data.title) ? data.title : '';
    data.intro = validText(data.intro) ? data.intro : "";
    data.image = validText(data.image) ? data.image : "";

    if (!Validator.isLength(data.title, { min: 1, max: 150})) {
        errors.title = "Title must be between 1 and 155 characters";
    }

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required'
    }

    if (!Validator.isLength(data.intro, { min: 150 })) {
      errors.title = "Intro must be at least 150 characters";
    }

      if (Validator.isEmpty(data.intro)) {
        errors.intro = "Intro field is required";
      }

      if (Validator.isEmpty(data.image)) {
        errors.image = "Image field is required";
      }

    

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}