import dbo from "../dbo";
import { waterfall } from "async";
import { UserModel } from "../models";

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

export default {
    singup
}