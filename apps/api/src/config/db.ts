import { Pool } from "pg";
const pool=new Pool({
  connectionString:process.env.DB_URL
})

pool.connect()
  .then(()=>console.log("Database was connected successfully"))
  .catch((err)=>console.log(`Error connecting to the database ${err}`))