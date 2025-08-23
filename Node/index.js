// http web server

const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

// Why express?? 

const app = express(); // handler function 

app.get('/',(req,res) => {
    return res.send("Hello from home page");
})
app.get('/about',(req,res)=>{
    return res.send("Hello from about page" + "Hey" + req.query.name);
})

/*
const myServer = http.createServer((req,res)=>{
    if(req.url == "/favicon.ico") return res.end();
    const log = `${Date.now()}:${req.method} ${req.url} New Request Received\n`;
    const myUrl = url.parse(req.url, true);
    fs.appendFile('log.txt',log,(err,data)=> {
        switch(myUrl.pathname){
            case "/":
                res.end("Home page");
                break;
            case "/about":
                const username = myUrl.query.myname;
                res.end(`hii ${username}`);
                break;
            case "/search":
                const search = myUrl.query.search_query;
                res.end(`Here are your search results for ${search}`);
                break;
            default:
                res.end("404 not found");
        }
        
    });
    
});
*/

app.listen(8000,()=>console.log("server started"));


/*

    http request 
    post : send to server and mutate the data ;
    get : fetch from server 
    put : 
    patch : exiting entry change 
    delete : delete entry 
 */


