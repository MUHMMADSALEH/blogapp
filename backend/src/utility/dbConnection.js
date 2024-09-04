
import mongoose from "mongoose"



export const connectToDb=()=>{
  mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("Connected to Db")
  }).catch((err)=>{
    console.log(err)
    console.log("Disconnected to Db",err);
  })

}