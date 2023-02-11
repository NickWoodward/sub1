import Joi from 'joi';

const newContactSchema = Joi.object({
  name:
      Joi.string().trim().min(2).max(50).required().messages({
          "string.base": `Must be text`,
          "string.empty": `Cannot be empty`,
          "string.min": `Must be > 2`,
          "string.max": `Must be < than 50`,
          "any.required": `Required`,
      }),
  surname: 
      Joi.string().trim().min(2).max(50).required().messages({
          "string.base": `Must be text`,
          "string.empty": `Cannot be empty`,
          "string.min": `Must be > 2`,
          "string.max": `Must be < than 50`,
          "any.required": `Required`,
      }),
  phone: 
      Joi.string().trim().replace(/\s*/g,"").pattern(new RegExp(/^0([1-6][0-9]{8,10}|7[0-9]{9})$/)).required().messages({
          "string.empty": `Cannot be empty`,
          'string.pattern.base': `Please enter a UK phone number`,
          "any.required": `Required`,
      }),
  email: 
      Joi.string().trim().email({tlds:{allow: false}}).required().messages({
          "string.empty": `Cannot be empty`,
          'string.domain': 'Must contain a valid domain name',
          'string.email': 'Must be a valid email',
          "any.required": `Required`,
      }),
  message: 
      Joi.string().trim().min(10).max(500).required().messages({
        "string.base": `Must be text`,
        "string.empty": `Cannot be empty`,
        "string.min": `Must be > 10`,
        "string.max": `Must be < than 500`,
        "any.required": `Required`,
      })
});

export const validateContact = (data) => validate(data, newContactSchema);


// ************* Reusable validation code *************

const validate = (data, schema) => {
  console.log(data);
  const options = { abortEarly: false }
  const { error } = schema.validate(data, options);
  if(!error) return null;
  
  const errors = {};
  error.details.forEach(error => {
    errors[error.path[0]] = error.message
  })
  return errors;
}
const validateProperty = ({ value, name }, schema) => {
  const { error } = schema.extract(name).validate(value);
  if(!error) return null;
  return error.details[0].message;
};

export const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;
  if(formControl.classList.contains('success')) formControl.classList.remove('success');
  formControl.classList.add('error') ;
}

export const setSuccessFor = (input) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');


  if(formControl.classList.contains('error')) {
      small.innerText = '';
      formControl.classList.remove('error');
  }
  formControl.classList.add('success');
}


