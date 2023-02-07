var express = require('express')
var app = express()

app.get('/',function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<html><body><p>This is my home Page</p><a href="/student">Go to Student</a></body></html>');
    res.end();
})

app.get('/student',function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<html><body><p>This is the student page</p><a href="/">Back to Home</a></body></html>');
    res.end();
})

const PORT = process.env.PORT || 8000
app.listen(PORT)
console.log('Server is up!')