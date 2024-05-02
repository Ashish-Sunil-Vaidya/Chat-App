
const {sign} = require("jsonwebtoken");

 const generateToken = (id) => {
    return sign({ id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1d"
    });
}

module.exports = generateToken;