import mongoose from "mongoose";
import { mongoUrl, dbname } from "../config/constants";

const uri = `${mongoUrl}/${dbname}`
mongoose.connect(uri, { useNewUrlParser: true }, (error, result) => {
    if (error) {
        console.log('Error in connecting to mongodb')
    } else {
        console.log('Mongo connection made successfully')
    }
})

const insert = (model, data, cb) => {
    let dataModel = new model(data)
    dataModel.save((error, resp) => {
        if (error) {
            cb(error, null)
        } else {
            cb(null, resp)
        }
    })
}

export default {
    insert
}