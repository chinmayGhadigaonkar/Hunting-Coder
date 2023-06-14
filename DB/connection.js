import mongoose from "mongoose";

const connectDb =()=>{
    mongoose.connect(process.env.URL).then(()=>{
        // console.log("connected to mongodb atlas");
    }).catch((e)=>{
        console.log(e)
    })
}

export default connectDb;

