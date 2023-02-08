import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import conn from "./db/db.js"
import rooter from "./rooter/rooter.js"

const app = express()
dotenv.config()


app.use(cors())
app.use(bodyParser.json())
conn()

app.get("/",(req,res)=>{
  res.send("burası anasayfa") 
})

app.use("/",rooter)

app.listen(process.env.PORT,()=>{
    console.log("servere bağlantı sağlandı")
})


