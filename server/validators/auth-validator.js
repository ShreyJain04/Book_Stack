const z = require("zod");

//creating an object schema

const signupSchema = z.object({
    username:z.
        string({required_error:"Name is required"})
        .trim()
        .min(2,{message:"Name must be of atleast 2 characters"})
        .max(40,{message:"Name must not exceed 40 charaters"}),
    email: z
        .string({required_error:"Email is required"})
        .trim()
        .min(3,{message:"Email must contain atleast 3 characters"})
        .max(40,{message:"Email cannot contain more than 40 characters"}),
    phone:z.
        string({required_error:"Phone number is required"})
        .trim()
        .min(10,{message:"Phone number must be of 10 digits"})
        .max(10,{message:"Phone number must be of 10 digits"}),
    password: z.
        string({required_error:"Password is required"})
        .min(6,{message:"Password must contain atleast 6 characters"})
        .max(100,{message:"Password cannot contain more than 100 characters"})
});

module.exports= signupSchema;
