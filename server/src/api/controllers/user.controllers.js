const asyncWrapper = require("../middleware/assync.Wrapper");
const db = require("../prisma");
const { createUserValidator, loginValidator } = require("../validators/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const createUser = asyncWrapper(
    async (req, res, next) => {
        const { email, password } = await createUserValidator.parse(req.body);

        const existingUser = await db.user.findUnique({ 
            where : { email } 
        });
        if (existingUser) {
            return res.status(402).json({message : 'this email is already in our db'})
        }

        const salt = 10;
        const hashPassword = await bcrypt.hash(password, salt);

        await db.user.create({
            data : {email, password : hashPassword}
        })
        return res.status(201).json({message : 'User created successfully'});
    }
)

const login = asyncWrapper (
    async (req, res, next) => {
        const { email, password } = await loginValidator.parse(req.body);

        const existingUser = await db.user.findUnique({
            where : { email }
        })
        if (!existingUser) {
            return res.status(403).json({message : 'wrong password or email'});
        }

        const correctPassword = await bcrypt.compare(password, existingUser.password);
        if (!correctPassword) {
            return res.status(403).json({message : 'wrong password or email'});
        }

        delete existingUser.password;
        const token = await jwt.sign(existingUser, process.env.JWT_SECRET);

        return res.status(201).json({token : token});
    }
)


module.exports = {
    createUser,
    login
}