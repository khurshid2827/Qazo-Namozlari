const { UserModel }=require("../../models/user_model")

let myFindOneFunc=(my_name)=>{
   return  UserModel.find({name:my_name}).then(e=>{
        let dataList=[]
        e.forEach(element => {
         const {name,age}=element;
         dataList.push(
            {name,age}
         )
        });
        return dataList;
    });
}

module.exports={
    myFindOneFunc
}