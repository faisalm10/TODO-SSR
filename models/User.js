import {Schema,model} from 'mongoose'
import bcrypt from 'bcryptjs';

const userSchema=new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        //checks for uniqueness not for validation
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    confirmPassword:{
        type:String,
        required:true,
        trim:true,
        validate:{
            validator:function (value){
                return this.password===value
            },
            message:'password and confirm password do not match'
        }
    }
},{
   timestamps:true 
})

//pre hook to hash password before we save document into db
userSchema.pre("save",async function(){
    let salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
})

//methods to verify password while logging in
userSchema.methods.verifyPassword=async function(pwd,pwdDB){
    return await bcrypt.compare(pwd,pwdDB)
}


let User=model("user",userSchema)

export default User;