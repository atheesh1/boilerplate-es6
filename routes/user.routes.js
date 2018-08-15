import { Router } from "express";

let routes = Router()

routes.get('/', (req, res) => {
    res.status(200).send({
        status: "UP"
    })
})

export default routes