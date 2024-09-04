import Blog from "./Blog.js";
import mongoose, { Schema } from "mongoose";

 const UserSchema=new mongoose.Schema({
    name: {
        type: String,
        required: false // Optional field
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

})
const User = mongoose.model('User', UserSchema);
export default User;