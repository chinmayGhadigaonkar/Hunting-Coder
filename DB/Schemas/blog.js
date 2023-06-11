import mongoose from "mongoose";


const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        require:[true ,"title is required"]
    },
    author:{
        type:String ,
        require:[true ,"author name is required"]
    },
    description:{
        type:String,
        require:[true ,"blog description  is required"]
    },
    date:{
        type:Date,
        default:Date.now
    }

}) 

mongoose.models = {}

const Blog =  mongoose.models.Blog || mongoose.model("Blog", blogSchema,"blogs")

export default Blog

