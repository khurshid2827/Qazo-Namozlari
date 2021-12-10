const { UserModel }=require("../../models/user_model")

let data =UserModel.find({}).then(e=>{
    let dataList=[]
    e.forEach(element => {
     const {name,age}=element;
     dataList.push(
        {name,age}
     )
    });
    return dataList;
});

module.exports={
    data
}