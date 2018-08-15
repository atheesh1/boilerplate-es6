import * as constants from "./config/constants";
import express from "express";

let app = express();
app.get('/', (req, res) => {
    res.status(200).send({
        status: "UP"
    })
})
app.listen(process.env.PORT);