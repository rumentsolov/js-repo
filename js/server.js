//alert("Hello JS!");

const express = require("express"); 

const app = express();

const https = require("http"); // SSL is still unknown for me
import { urlW } from "./links.js";

app.get("/",function(req,res){

    var weatherUrl = urlW;

    https.get(weatherUrl, function(response){
        console.log(response);
    })

    var path = require("path");
    res.sendFile(path.normalize(__dirname + "/../html/index.html"));
})


app.listen(8000, function () {
    console.log("Server listening on 8000");
});