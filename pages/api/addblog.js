import Blog from "@/DB/Schemas/blog";
import connectDb from "@/DB/connection";
export default async function handler(req, res) {
  

    if (req.method === 'POST') {
      const { title ,author , description} =req.body ;
      try{
        connectDb();
        const result = await Blog.create({title,author,description})
        res.status(200).json({sucess:true ,msg:"Blog added sucessfully ", result})
      }
      catch(err){
        res.status(400).json({sucess:false,meg:err})
      }
      
    }


    }
