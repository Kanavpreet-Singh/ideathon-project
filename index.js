const express=require("express")
const app=express() 
const path=require("path")
//All Middlewares
const middlewares = require('./middlewares');
middlewares(app);

const {main}=require("./connection")

main('mongodb://127.0.0.1:27017/e-gov')  //connection with 'e-gov' db
.then((res)=>{
    console.log("connection with 'e-gov' successful")
})
.catch((err)=>{
    console.log("Cant connect with 'e-gov'")
})

let port=8000
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})

app.set("views",path.join(__dirname,"/views"))
app.set('view engine', 'ejs');

// Route Imports
const homeRoutes = require("./routes/homeRoutes");
const issueRoutes = require("./routes/issueRoutes");
const userRoutes = require("./routes/userRoutes");

// Routes
app.use("/", homeRoutes);
app.use("/", issueRoutes); 
app.use("/user", userRoutes);


















