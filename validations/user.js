import joi from "joi";
import { validator } from "../utils/utils";

const signup = (req, res, next) => {
  let data = req.body
  let signupSchema = joi.object().keys({
    name: joi.string().required(),
    mailId: joi.string().required(),
    password: joi.string().required()
  })

  validator(data, signupSchema, (error, resp) => {
    if (error) {
      res.status(422).send({ message: error.message })
    } else {
      next()
    }
  })
}

const signin = (req, res, next) => {
  let data = req.body
  let signinSchema = joi.object().keys({
    mailId: joi.string().required(),
    password: joi.string().required()
  })

  validator(data, signinSchema, (error, resp) => {
    if (error) {
      res.status(422).send({ message: error.message })
    } else {
      next()
    }
  })
}

export default {
  signup,
  signin
}