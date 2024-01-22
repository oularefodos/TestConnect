const asyncWrapper = require("../middleware/assync.Wrapper");
const db = require("../prisma");
const { createCommentValidator, getCommentValidator } = require("../validators/comment")

const createComment = asyncWrapper (
    async (req, res, next) => {
        const data = await createCommentValidator.parse(req.body);

        const existingComment = await db.post.findUnique({where : { id : data.postId }});
        if (!existingComment) return res.status(403).json({message : 'invilid post id'});

        const comment = await db.comment.create({data});
        res.status(201).json({comment : comment});
    }
)

const getComments = asyncWrapper (
    async (req, res, next) => {
        const { postId } = await getCommentValidator.parse(req.body);
        const comments = await db.comment.findMany( {
            where : { postId }
        });
        res.status(201).json({comments : comments});
    }
)

module.exports = {
    createComment,
    getComments
}