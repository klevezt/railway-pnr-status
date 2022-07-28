export const encryptWithAES = (message) => {
    var CryptoJS = require("crypto-js");

    var key = process.env.REACT_APP_SECRET_KEY; 
    var iv = process.env.REACT_APP_INITIAL_VECTOR; 

    key = CryptoJS.enc.Base64.parse(key);
    iv = CryptoJS.enc.Base64.parse(iv);

    var cipherData = CryptoJS.AES.encrypt(message, key, { iv: iv }).toString();
    return cipherData;
}