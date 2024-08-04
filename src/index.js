import express from "express";
import { customMongo } from "./config/mongo.js"
import { customRouter } from "./routes/index.router.js";

const app = express()

customMongo().then(()=>{console.log("DB HAS SUCCESSFULLY CONNECTED");}).catch((e)=>{
    console.log("ERROR IN DB" + e.message)
})

app.use(express.json())

app.use(customRouter)

app.listen(9000,()=>{console.log(9000);})