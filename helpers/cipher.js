import crypto from "crypto";

var algorithm = process.env.ALGORITHM
var privateKey = process.env.PASSWORD

function decrypt(token) {
    var decipher = crypto.createDecipher(algorithm, privateKey);
    var dec = decipher.update(token, 'hex', 'utf8');
    dec += decipher.final('utf8');
    dec = JSON.parse(dec)
    return dec;
}

function encrypt(user) {
    user = JSON.stringify(user)
    var cipher = crypto.createCipher(algorithm, privateKey);
    var crypted = cipher.update(user, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

export {
    encrypt, decrypt
}