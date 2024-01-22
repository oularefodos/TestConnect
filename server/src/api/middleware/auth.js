const db = require("../prisma");
const asyncWrapper = require("./assync.Wrapper");
const jwt = require('jsonwebtoken')

const authMiddleware = asyncWrapper (
    async (req, res, next) => {
        const authorization = req.header('Authorization');
        if (!authorization) {
            return res.status(401).json({message: 'Permission denied'});
        }
        const token = authorization.replace('Bearer ', '');
        const decodedtoken = await jwt.verify(token, process.env.JWT_SECRET);
        user = decodedtoken;
        const existingUser = await db.user.findUnique({
            where : {id : user.id, email : user.email}
        })
        if (!existingUser) {
            return res.status(401).json({message: 'Permission denied'});
        }
        req.user = user;
        next();
    }
)

module.exports = authMiddleware;
