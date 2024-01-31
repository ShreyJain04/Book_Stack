const z= require('zod');

const forgotPasswordSchema= z.object({
    email: z
        .string({required_error:"Email is required"})
        .trim()
        .min(3,{message:"Email must contain atleast 3 characters"})
        .max(30,{message:"Email cannot contain more than 30 characters"}),
});

module.exports = forgotPasswordSchema;