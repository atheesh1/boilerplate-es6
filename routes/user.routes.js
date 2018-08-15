import { Router } from "express";
import userController from "../controllers/user.controller";
import userValidator from "../validations/user";

let routes = Router()

routes.get('/', (req, res) => {
    res.status(200).send({
        status: "UP"
    })
})

routes.post('/signup', userValidator.signup, userController.singup)
routes.post('/signin', userValidator.signin, userController.signin)

export default routes