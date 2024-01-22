const asyncWrapper = require("../middleware/assync.Wrapper");
const db = require("../prisma");
const createPostValidator = require("../validators/post");

const createPost = asyncWrapper (
    async (req, res, next) => {
        const data = await createPostValidator.parse(req.body);
        console.log(req.user)
        console.log(data)
        data.authorId = req.user.id
        const post = await db.post.create({data});
        res.status(201).json({post : post});
    }
)

const getPosts = asyncWrapper (
    async (req, res, next) => {
        const posts = await db.post.findMany();
        res.status(201).json({posts : posts});
    }
)

module.exports = {
    createPost,
    getPosts
}