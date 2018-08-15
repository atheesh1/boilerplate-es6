import { Router } from "express";
import userController from "../controllers/user.controller";

let routes = Router()

routes.get('/', (req, res) => {
    res.status(200).send({
        status: "UP"
    })
})

routes.post('/signup', userController.singup)

export default routes