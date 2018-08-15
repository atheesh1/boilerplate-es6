import joi from "joi";

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

export {
    validator
}