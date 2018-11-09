const express = require("express"),
    bodyParser = require("body-parser"),
    app = express();
    
app.use(bodyParser.urlencoded({extended: true}));    
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res){
    const trails = [
            {name: 'Tryon Creek State Natural Area', image: 'https://images.unsplash.com/photo-1422557201808-34aff9fb1264?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=71e343f444e2f69cd4a628a31ebc7481&auto=format&fit=crop&w=750&q=80'},
            {name: 'Hoyt Arboretum', image: 'https://images.unsplash.com/photo-1537974932084-2245bfa69277?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ed4568060b02653f0b68dc7c3bbad439&auto=format&fit=crop&w=667&q=80'},
            {name: 'Forest Park', image: 'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf3ecd34b3757e384e703b2e79243fb7&auto=format&fit=crop&w=889&q=80'}
        ]
        
        res.render('index', {trails: trails});
});   
    




app.listen(process.env.PORT, process.env.IP, function(req, res){
    console.log("Server Has Started!"); 
});
