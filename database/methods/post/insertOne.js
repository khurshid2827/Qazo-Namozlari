const { UserModel } =require("../../models/user_model")


let  myAddOne=(my_name,my_age)=>{
   return UserModel.insertMany([
    {
        name:my_name,
        age:my_age
    }
   ]).then(e=>{
     return e
   })
   
}


module.exports={
    myAddOne
}

