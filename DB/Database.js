require('dotenv').config()
const mongoose=require("mongoose");

let instance=null;

// hatayı çözemedim connection_string hataıs unutma
class Database{

constructor(){
if(!instance){
this.mongoConnection=null;
    instance=this;

}
return instance;
}
async connect(options){

    try {
        console.log("Db connecting");
        console.log(process.env.CONNECTION_STRING)
        let db= await mongoose.connect(options.CONNECTION_STRING);
    
        this.mongoConnection=db;
        console.log("Db connected");
    } catch (err) {
        console.error(err);
    }
    
}
}
module.exports=Database;