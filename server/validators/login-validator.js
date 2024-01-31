const z= require('zod');

const loginSchema= z.object({
    email: z
        .string({required_error:"Email is required"})
        .trim()
        .min(3,{message:"Email must contain atleast 3 characters"})
        .max(30,{message:"Email cannot contain more than 30 characters"}),
    password: z.
        string({required_error:"Password is required"})
        .min(7,{message:"Password must contain atleast 7 characters"})
        .max(100,{message:"Password cannot contain more than 100 characters"})
});

module.exports = loginSchema;