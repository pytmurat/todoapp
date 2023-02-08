import mongoose from "mongoose"

const todoShecma = new mongoose.Schema({

  baslik:{
    type:String,
    require:true
  },
  description:{
    type:String,
    
  },
  
  isFnished:{
    type:Boolean,
    default:false
  },
  created:{
    type:Date,
    default:Date.now
  }

  },{timestamps:true})

const todoModel = mongoose.model("todoDb",todoShecma)

export default todoModel