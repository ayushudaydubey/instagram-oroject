const mongoose = require("mongoose")



function connect () {
  mongoose.connect("mongodb://localhost:27017/backend-project")
  .then(()=>{
    console.log("Database connected with server ");
    
  })
  .catch((err)=>{
    console.log(err);
    
  })
}

module.exports = connect;