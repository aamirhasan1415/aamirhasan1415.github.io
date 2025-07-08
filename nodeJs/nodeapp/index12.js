// let name = process.argv[2] || "John" // command kine unput
// console.log("Hello"+name);

// let name1 = process.argv[2];
// let name2 = process.argv[3];

// console.log(`Hello ${name1} name ${name2}`);


import express from 'express'

const app = express()
const port = process.argv[2] || 8080
app.listen(port,(req,res)=>{
    console.log(`Server started at ${port}`);
});

app.get("/",(req,res)=>{
    res.send(`Hello world from port ${port}`)
})