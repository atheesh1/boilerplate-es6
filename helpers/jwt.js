import jwt from "jsonwebtoken";

const getToken = (data, tokenType) => {
    let expireTime = 1 * 60 /* * 60 */

    if (tokenType === 'refresh') {
        expireTime = 30 * 24 * 60 * 60
    }
    let token = jwt.sign({
        data: data,
    }, "hello", {
            expiresIn: expireTime,
        })
    return token
}

const verifyToken = (token, cb) => {
    try {
        let data = jwt.verify(token, "hello")
        cb(null, data)
    } catch (error) {
        cb({
            status: 409,
            message: 'Unathourized'
        }, null)
    }
}

export {
    getToken,
    verifyToken
}