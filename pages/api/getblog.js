import Blog from "@/DB/Schemas/blog";
import connectDb from "@/DB/connection";
export default async function handler(req, res) {
  
    if (req.method === 'GET') {
      try{
        connectDb()
        const data =await Blog.find()
        res.status(200).json(data)
      
      }
      catch(err){
        res.status(400).json({sucess:false,meg:err})
      }

    }

    }
