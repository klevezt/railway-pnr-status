
export const tmpEncrypt = (number) =>{
    var CryptoJS = require("crypto-js");

    var key = process.env.REACT_APP_SECRET_KEY;
    var iv = process.env.REACT_APP_INITIAL_VECTOR; 

    key = CryptoJS.enc.Latin1.parse(key);
    iv = CryptoJS.enc.Latin1.parse(iv);

    var encrypted = CryptoJS.AES.encrypt(number, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding,
    });
    return encrypted.toString();

}