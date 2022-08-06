const bcrypt = require('bcrypt');

const generateHash = (password) => {
    return bcrypt.hash(password, 12);
};

const comparePassword = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};

module.exports = {
    generateHash,
    comparePassword,
};
