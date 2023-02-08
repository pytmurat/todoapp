import  express from "express";
import * as rot from "../controller/controller.js"

const rooter = express.Router()

rooter.get("/todos",rot.getModel)
rooter.post("/postModel",rot.postModel)
rooter.delete("/delModel/:id",rot.delModel)


export default rooter