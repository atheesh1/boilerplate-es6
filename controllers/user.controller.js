import dbo from "../dbo";
import { waterfall } from "async";
import { UserModel } from "../models";
import { encrypt, decrypt } from "../helpers/cipher";
import { getToken, verifyToken } from "../helpers/jwt";

const singup = (req, res) => {
    let data = req.body
    waterfall([
        (next) => {
            dbo.insert(UserModel, data, (error, resp) => {
                if (error) {
                    next({
                        message: 'Error in inserting user details',
                        error
                    }, null)
                } else {
                    next(null, {
                        message: 'User created successfully'
                    })
                }
            })
        }
    ], (error, resp) => {
        if (error) res.status(400).send(error)
        else res.status(200).send(resp)
    })
}

const signin = (req, res) => {
    let { mailId, password } = req.body;

    waterfall([
        (next) => {
            dbo.findOne(UserModel, { mailId }, (error, user) => {
                if (error) {
                    next({
                        message: 'Error in finding user'
                    }, null)
                } else if (!user) {
                    next({
                        message: 'User not found'
                    }, null)
                } else {

                    next(null, user)
                }
            })
        }, (user, next) => {
            if (password === user.password) {
                user = user.toObject()
                delete user.password
                user = encrypt(user)
                let accessToken = getToken(user, 'access')
                let refreshToken = getToken(user, 'refresh')
                let resp = {
                    accessToken: accessToken,
                    refreshToken: refreshToken
                }
                next(null, resp)
            } else {
                next({
                    message: 'Password not matched'
                })
            }
        }
    ], (error, resp) => {
        if (error) res.status(400).send(error)
        else res.status(200).send(resp)
    })
}

const profile = (req, res) => {
    res.status(200).send(req.user)
}

export default {
    singup,
    signin,
    profile
}