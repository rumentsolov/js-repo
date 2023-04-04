//alert("Hello JS!");

const express = require("express"); 

const app = express();

const https = require("http"); // SSL is still unknown for me

app.get("/",function(req,res){

    const weatherUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f6b0cb5b903bf06fe77b47d1818b6ad2";

    https.get(weatherUrl, function(response){
        console.log(response);
    })

    var path = require("path");
    res.sendFile(path.normalize(__dirname + "/../html/index.html"));
})


app.listen(8000, function () {
    console.log("Server listening on 8000");
});