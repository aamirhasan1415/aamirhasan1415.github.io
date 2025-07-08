import http from "http"

let server    = http.createServer((req, res) =>{
    res.end("Request recieve..")
});
server.listen(8080,()=>{
    console.log("server atared")
});