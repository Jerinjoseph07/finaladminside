const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://jerin:jerin@cluster0.crsjo7n.mongodb.net/data?retryWrites=true&w=majority")
.then(()=>{console.log("admin log Connected")})
.catch(err=>console.log(err));
const logschema=new mongoose.Schema({
email:String,
password:String,
}
);
var data2model=mongoose.model("Adminlog",logschema)
module.exports=data2model