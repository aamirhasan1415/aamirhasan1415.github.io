//import express from 'express'
import bcrypt from 'bcrypt'

// const app = express()

// app.listen(8080,() =>{
//     console.log("Server strted")
// });

const pwd = "pass123";
// const hashpass = await bcrypt.hash(pwd,10);
// console.log(hashpass);

const check = await bcrypt.compare("pass123","$2b$10$K8FrtxY4XPwiPy3EXbsrJ.ZbXUgLnOk4Zr63JvuR3SEbFyzepKHcq");
console.log(check);