const { app } =require("../core/server")
const { data }  =require("../database/methods/get/findUsers")
const { myFindOneFunc } =require("../database/methods/get/findOnebyname")
app.route("/get_users").get((req,res)=>{
    data.then(e=>{
        res.send(e)
    })
})

// app.route("/get_user_by_id/:id").get((req,res)=>{
//     res.send(req.params.id)
// })

app.route("/get_user_by_name/:name").get((req,res)=>{
    myFindOneFunc(req.params.name).then(e=>{
        res.send(e);
    })
})


