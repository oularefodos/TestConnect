const {z, ZodError} = require('zod')

const createCommentValidator = z.object({
    content: z
    .string()
    .min(4)
    .max(500)
    .trim(),
    postId : z.string()
})
const getCommentValidator = z.object({
    postId : z.string()
})

module.exports = {
    createCommentValidator,
    getCommentValidator
};