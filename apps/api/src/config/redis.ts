import {Redis} from "ioredis";

export const redis=new Redis(process.env.REDIS_URL!);
redis.on("connect",()=>{
  console.log("Connected to the redis successfully")
})

redis.on("error",(err:any)=>{
  console.log(`Error connecting to the redis:${err}`)
})