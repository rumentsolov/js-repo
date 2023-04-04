//alert("Hello JS!");

const express = require('express'); 

const app = express();

app.get("/",function(req,res){
    var path = require("path");
    res.sendFile(path.normalize(__dirname + "/../html/index.html"));
})


app.listen(8000, function () {
    console.log("Server listening on 8000");
});