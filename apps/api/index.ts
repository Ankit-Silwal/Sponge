import "dotenv/config"
import app from "./app.js"
const PORT=process.env.PORT ||8000;
app.listen(PORT,()=>{
  console.log(`The Server is running at port no ${PORT}`)
})