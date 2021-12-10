const { app }= require("../core/server")
const {myAddOne} =require("../database/methods/post/insertOne")

app.route("/post_user").post(
     (req,res)=>{
      myAddOne(req.body.name,req.body.age).then(e=>{
        res.send(e); 
     })
        
    }


)

