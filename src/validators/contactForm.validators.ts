import Joi from 'joi';

export const contactFormValidator = Joi.object({
   userName: Joi.string().regex(/^[A-Za-z]+$/u).messages({
      'string.pattern.base': 'You can use only Latin letters and it is required'
   }).required(),
   email: Joi.string().regex(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/).trim().lowercase().messages({
      'string.pattern.base': 'Email must contain the \'@\' symbol and a domain name, and this field is required.'
   }).required(),
   message: Joi.string().trim().messages({
      'string.pattern.base': 'You can use only Latin letters and it is required'
   }).required(),
});