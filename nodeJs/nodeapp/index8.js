import express from 'express'

const app = express()

app.listen(8080,()=>{
    console.log("Server Started")
});

app.get("/products",(req , res)=>{
    res.send("Product list")
});

app.use(express.static("public"));  //public/index.html  -- this is virtual path 
//app.use(express.static("images"));

//app.use("/images",express.static("public"));