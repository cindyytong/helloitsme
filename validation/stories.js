const Validator = require('validator');
const validText = require('./valid-text');

// model level validations 

module.exports = function validateStoryInput(data) {
    let errors = {};
    // check the input values for the model and add errors to the errors object
    data.title = validText(data.title) ? data.title : '';

    if (!Validator.isLength(data.title, { min: 1, max: 150})) {
        errors.text = "Title must be between 1 and 155 characters"
    }

    if (!Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}