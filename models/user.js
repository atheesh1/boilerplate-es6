import mongoose from "mongoose";

let Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    mailId: String,
})

let UserModel = mongoose.model('user', UserSchema)

export {
    UserModel
}