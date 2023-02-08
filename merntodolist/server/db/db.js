import mongoose from "mongoose";

const conn = ()=>{
  mongoose.connect(process.env.URL,{
    dbName:"todoDb",
    useNewUrlParser:true,
    useUnifiedTopology:true,
  }).then(()=>{
    console.log("db ye bağlanıldı")
  }).catch((err)=>{
    console.log(`db ye bağalanırken hata oluştu ${err}`)
  })
}

export default conn