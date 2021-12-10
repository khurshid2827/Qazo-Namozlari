const { mongoose } =require("../connection/connect")

const UserSchema=mongoose.Schema({
    name:String,
    age:Number
})

const UserModel =mongoose.model("user",UserSchema)





module.exports ={
    UserModel
}