import crypto from "crypto";

var algorithm = 'aes-256-ctr';
var privateKey = '37LvDSm4XvjYOh9Y';


function decrypt(password) {
    var decipher = crypto.createDecipher(algorithm, privateKey);
    var dec = decipher.update(password, 'hex', 'utf8');
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