const mongoose =require("mongoose")
mongoose.Promise=global.Promise;
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(v=>console.log("db connect"))
.catch(e=>console.log("there is a error "))

module.exports={
    mongoose
}

