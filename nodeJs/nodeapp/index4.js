import express from 'express'
const app = express()
app.listen(8080,() => {
    console.log("Server started")
});

// app.get("/",(req,res) =>{
//     res.send("Hello World");
// });
// app.get("/products",(req,res)=>{
//     //res.send("Product List");
//     res.status(201).json({id:1, name:"product1",price:25});
// });

// app.get("/ab*cd",(req,res) =>{
//     res.send("Hello");
// });

//localhost:8080/name
// app.get("/:name",(req,res) =>{
//     res.send("Good Morning ");
// });

//localhost:8080/name
// app.get("/name",(req,res) =>{
//     res.send("Good Morning ");
// })


//localhost:8080/jhon/21
// app.get("/:name/:age",(req,res) =>{
//     res.send(req.params.name+req.params.age)
// });

//localhost:8080/name/jhon/age/21
// app.get("/name/:name/age/:age",(req,res) =>{
//     res.send(req.params.name+req.params.age)
// });

// app.get("/",(req,res) =>{
//     res.send(req.headers.authorization);
// });


//http://localhost:3000/?name=Aamir&age=21

// app.get("/", (req, res) => {
//     res.send(req.query.name + req.query.age);
// });

// app.get("/",(req,res)=>{
//     res.send("Get Request")
// });

// app.post("/",(req,res)=>{
//     res.send("post Request")
// });

// app.delete("/",(req,res)=>{
//     res.send("delete  Request")
// });