const {z} = require("zod");

const registerSchema = z.object({
    username:z
    .string({error_message:"Username is required"})
    .trim()
    .min(3,{error_message:"Username must be three character"})
    .max(20,{error_message:"Username must be less than 20 character"}),
    email:z
    .string({error_message:"Email is required"})
    .trim()
    .email({error_message:"Invalid Email"})
    .min(3,{error_message:"Email must be three character"})
    .max(20,{error_message:"Email must be less than 20 character"}),
    password:z
    .string({error_message:"password is required"})
    .trim()
    .min(3,{error_message:"password must be three character"})
    .max(20,{error_message:"password must be less than 20 character"}),
    cpassword:z
    .string({error_message:"confirm password is required"})
    .trim()
    .min(3,{error_message:"confirm password must be three character"})
    .max(20,{error_message:"confirm password must be less than 20 character"}),
})
module.exports = registerSchema;