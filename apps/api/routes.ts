import type {Application} from "express";
export async function setUpRoutes(app:Application){
  app.get('/health',(req,res)=>{
    return res.status(200).json({
      success:true
    })
  })
}