const {z, ZodError} = require('zod')

const createUserValidator = z.object({
    email: z
      .string()
      .email()
      .toLowerCase().trim(),
    password: z
      .string()
      .min(8)
      .regex(/[a-z]/)
      .regex(/[A-Z]/)
      .regex(/[0-9]/)
      .regex(/[!@#$%^&*(),.?":{}|<>]/),
});

const loginValidator = z.object({
    email: z
      .string()
      .email()
      .toLowerCase().trim(),
    password: z.string()
});

module.exports = {
    createUserValidator,
    loginValidator
}