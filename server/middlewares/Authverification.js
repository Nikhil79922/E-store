const Joi = require('joi');

const verifySignUp = (req, res, next) => {
  const Schema = Joi.object({
    name: Joi.string().min(3).max(15).required(),
    email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
    phone: Joi.string().pattern(/^[0-9]{10,15}$/).required(),
    role: Joi.string().valid('ROLE_USER', 'ROLE_ADMIN').default('ROLE_USER'),
    password: Joi.string().min(8).required(),
  });
  const { error } = Schema.validate(req.body, { abortEarly: false });
  if (error) {
    const errorMessages = error.details.map(detail => detail.message);
    return res.status(400).json({
      message: 'Invalid Data Entry',
      errors: errorMessages,
    });
  }
  next();
};

const verifyLogin = (req, res, next) => {
  const Schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().min(8).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  });
  const { error } = Schema.validate(req.body);
  if (error) {
    console.log(error)
    return res.status(400).json({ message: 'Invalid Data Entry', error: error.details[0].message });
  }
  next();
};

module.exports = {
  verifySignUp,
  verifyLogin,
}