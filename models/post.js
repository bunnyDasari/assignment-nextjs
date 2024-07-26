import mongoose from "mongoose";

const {Schema} = mongoose;

const PostSchema = new Schema({
    name:{
        type:String,
        required : true
    },
    email:{
        type : String,
        required : true
    },

},{timestamps:true});
const Post = mongoose.model('Post', PostSchema);
export default Post
