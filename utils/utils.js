import joi from "joi";
import { verifyToken } from "../helpers/jwt";
import { waterfall } from 'async';
import { decrypt } from "../helpers/cipher";

const validator = (data, schema, cb) => {
    joi.validate(data, schema, (error, resp) => {
        if (error) {
            cb({
                message: error.details[0].message
            }, null)
        } else {
            cb(null, {
                isValid: true
            })
        }
    })
}

const isAuthenticated = (req, res, next) => {
    let token = req.headers.token
    verifyToken(token, (error, resp) => {
        if (error) {
            res.status(409).send(error)
        } else {
            let data = decrypt(resp.data)
            req.user = data
            next()
        }
    })
}

export {
    validator,
    isAuthenticated
}