import { Router } from "express";
import userController from "../controllers/user.controller";
import userValidator from "../validations/user";
import { isAuthenticated } from "../utils/utils";

let routes = Router()

routes.get('/', (req, res) => {
  res.status(200).send({
    status: "UP"
  })
})

routes.post('/signup', userValidator.signup, userController.singup)
routes.post('/signin', userValidator.signin, userController.signin)
routes.get('/profile', isAuthenticated, userController.profile)

export default routes