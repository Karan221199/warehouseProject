const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
app.use(cors());
app.use(express.json());

var bodyParser = require('body-parser');
const { json } = require('body-parser');

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));


  
app.get('/getData',(req,res)=>{
    fs.readFile("./warehouse.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    res.send(jsonString);
    });
});

app.post('/updateData',(req,res)=>{

    const Data =JSON.parse(req.body.data);
    
    const fileName = './warehouse.json';
    const file = require(fileName);
       
    fs.writeFile(fileName,JSON.stringify(Data), function writeJSON(err) {
    if (err) return console.log(err);
     res.send("success");
    });
   
});

app.post('/addData',(req,res)=>{
    const Data = req.body;
    
    var json = fs.readFileSync("./warehouse.json");
    var obj = JSON.parse(json);
    var length = obj.length;

    Data.id = length+1;

    obj.push(Data);
    
    var newData = JSON.stringify(obj);
    fs.writeFile("./warehouse.json", newData, (err) => {
        // Error checking
        if (err) throw err;
        console.log("New data added");
        res.send("success");
    });

});

app.post('/deleteData',(req,res)=>{
   
    var newObj = [];
    let id = parseInt(req.body.data);

    console.log(id);
    var json = fs.readFileSync("./warehouse.json");
    
    var obj = JSON.parse(json);

    for(var i=0;i<obj.length;i++)
    {
        if(obj[i].id != id)
        {
            newObj.push(obj[i]);
        }
    }
    
    var newData = JSON.stringify(newObj);
    fs.writeFile("./warehouse.json", newData, (err) => {
        // Error checking
        if (err) throw err;
        console.log("Data deleted");
        res.send("success");
    });

});


app.listen(3001,()=>{
    console.log('running on port 3001');
});