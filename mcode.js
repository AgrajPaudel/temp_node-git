const http=require('http');
const l=require('os')
console.log(l.freemem());
const server=http.createServer((req,res)=>{
if(req.url==='/')
{
    res.end('server with slash')
    res.end(l.freemem())
}
else if(req.url==='/about')
res.end('about server')
else if(req.url==='/faq')
{res.end('faq')
}
else
res.end('<h1>OOPs</h1>  <a href="/">Back to Server</a>')
})

server.listen(3000)
