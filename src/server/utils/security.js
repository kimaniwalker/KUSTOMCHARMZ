import bcrypt from 'bcrypt';
const SALT_ROUNDS = 12;

function generateHash(password) {


const salt = bcrypt.genSaltSync(SALT_ROUNDS);
const hash = bcrypt.hashSync(password, salt);

return hash
}

function checkPassword(password, hash) {
    return bcrypt.compareSync(password, hash);
}

export { generateHash, checkPassword };