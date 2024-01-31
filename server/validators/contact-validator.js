const z= require('zod');

const contactusSchema= z.object({
    username: z
        .string({required_error:"Name is required"})
        .trim()
        .min(3,{message:"Name must be of atleast 3 chracters"})
        .max(30,{message:"Name must not exceed 30 charaters"}),
    email: z
        .string({required_error:"Email is required"})
        .trim()
        .min(3,{message:"Email must contain atleast 3 characters"})
        .max(30,{message:"Email cannot contain more than 30 characters"}),
    message:z.
        string({required_error:"Message cannot be empty"})
        .trim()
        .min(2,{message:"Minimun 2 characters are required"})
        .max(500,{message:"Message cannot exceed 500 words"}),
    });

    module.exports= contactusSchema;