const asyncWrapper = require("../middleware/assync.Wrapper");
const db = require("../prisma");
const { createUserValidator } = require("../validators/user");
const bcrypt = require('bcrypt');


const createUser = asyncWrapper(
    async (req, res, next) => {
        const { email, password } = await createUserValidator.parse(req.body);

        const existingUser = await db.user.findMany({ where : {email} });
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


module.exports = {
    createUser
}