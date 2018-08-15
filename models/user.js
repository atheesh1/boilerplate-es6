import mongoose from "mongoose";

let Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    mailId: String,
    password: String
}, {
        versionKey: false,
        strict: true
    })

let UserModel = mongoose.model('user', UserSchema)

export {
    UserModel
}