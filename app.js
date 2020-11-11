const express = require("express");

const app = express();

app.use(express.static('public'));
app.use(express.static('views'));

app.get('/', (req,res)=>{
     
    res.sendFile( __dirname + '/' + req.url )});


app.get ('*', function (req, res) {
        res.sendFile(__dirname + '/' + req.url)
    })




app.listen(3000, function (){
    "corriendo en puerto 3000";
})