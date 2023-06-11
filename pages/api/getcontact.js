import Contact from "@/DB/Schemas/contact";
import connectDb from "@/DB/connection";
export default async function handler(req, res) {
  

    if (req.method === 'POST') {
      const { name ,email, meassage} =req.body ;
      try{
        connectDb();
        const result = await Contact.create({name,email,meassage})
        res.status(200).json({sucess:true ,msg:"sent data sucessfully ", result})
      }
      catch(err){
        res.status(400).json({sucess:false,meg:err})
      }
      
    }
    }