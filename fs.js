const fs = require('fs');
const http = require('http');

http.createServer((req,res)=>{
    // fs.readFile('server.js',(err,data)=>{
    //     res.writeHead(200,{'content-type':'text/plain'});
    //     res.write(data);
    //     res.end();
    // })

    fs.appendFile('index.html','<h2>This is append data</h2>',(err,data)=>{
         if(err) throw err
         console.log("file update...!");
         return res.end();

    })

    fs.unlink('index.html',(err)=>{
        if(err)throw err
        console.log("file deleted...!");
        return res.end();
    })
}).listen(5000)
