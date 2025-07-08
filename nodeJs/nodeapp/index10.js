import jwt from 'jsonwebtoken'
const SECRET  = "sometext"
// const user = {
//     name:"Jhon",
//     email:"jhon@gmail.com",
//     role:"admin"
// }
// const token = jwt.sign(user,SECRET,{expiresIn:"1h"});
// console.log(token);
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmhvbiIsImVtYWlsIjoiamhvbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NTE2MDQ5NTcsImV4cCI6MTc1MTYwODU1N30.7OapOgJRZdK-FwK_UcmHIY0pfnfsiQ3jArjtqJV5fVs";
const check = jwt.verify(token,SECRET)
console.log(check)