const {z, ZodError} = require('zod')

const createPostValidator = z.object({
    title: z
    .string()
    .min(4)
    .max(50)
    .trim(),
    content: z
    .string()
    .min(4)
    .max(500)
    .trim(),
    location: z
    .string()
    .min(4)
    .max(50)
    .trim(),
})

module.exports = createPostValidator;