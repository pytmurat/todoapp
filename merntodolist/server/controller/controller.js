import todoModel from "../model/model.js";

const getModel =  async(req,res)=>{
  todoModel.find().then(todos =>res.json(todos))

}

const postModel = async(req,res)=>{
  const newModel = new todoModel({
    "baslik":req.body.baslik,
    "description":req.body.description,
    "isFnished":req.body.isFnished
  })
  const todo = await newModel.save()
  res.status(200).json(todo)
}

const delModel = (req,res)=>{

  const id = req.params.id
  todoModel.findByIdAndDelete({_id:id},(err)=>{
    if(!err){
      console.log("kitap silindi")
    }else{
      console.log(`hata alındı ${err}`)
    }
    
  }

  
  )
}

export {
  getModel,
  postModel,
  delModel
}