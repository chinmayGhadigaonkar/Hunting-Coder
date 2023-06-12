
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        require:[true ,"Enter your name"]
    },

    email:{
        type:String ,
        require:[true ,"Enter your Email "]
    },
    meassage:{
        type:String
        ,
        require:[true ,"Enter your message"]
    },
    date:{
        type:Date,
        default:Date.now
    }

}) 


const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema  ,"contacts")

export default Contact

