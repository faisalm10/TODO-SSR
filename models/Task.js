import {Schema,model} from 'mongoose'

const taskSchema=new Schema({
    task:{
        type:String,
        required:true,
        trim:true
    }
},{
   timestamps:true 
})

let Task=model("task",taskSchema)

export default Task;