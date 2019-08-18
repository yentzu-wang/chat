import Joi from "joi"

export default Joi.object().keys({
  email: Joi.string()
    .email()
    .required()
    .label("Email"),
  username: Joi.string()
    .alphanum()
    .min(4)
    .max(30)
    .required()
    .label("username"),
  name: Joi.string()
    .max(254)
    .required()
    .label("name"),
  password: Joi.string()
    .regex(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,30}$/)
    .label("password")
    .options({
      language: {
        string: {
          regex: {
            base:
              "must have at least one lowercase letter, one uppercase letter, one degit, and one special character"
          }
        }
      }
    })
})
