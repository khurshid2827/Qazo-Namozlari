const mongoose =require("mongoose")
mongoose.Promise=global.Promise;
mongoose.connect("mongodb+srv://khurshid:khurshid2827@khurshidcluster.ae2lf.mongodb.net/QazoNamozlar?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(v=>console.log("db connect"))
.catch(e=>console.log("there is a error "))

module.exports={
    mongoose
}

