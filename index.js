require('dotenv').config()

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/user.routes";

let app = express();
app.use(bodyParser.json())
app.use(cors())

app.use('/user', userRoutes)

app.get('/', (req, res) => {
    res.status(200).send({
        status: "UP",
    })
})
console.log('PORT:', process.env.PORT)
app.listen(process.env.PORT);