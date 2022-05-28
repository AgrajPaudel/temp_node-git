const http=require('http');
const server=http.createServer((req,res)=>{
if(req.url==='/')
res.end('server with slash')
else if(req.url==='/about')
res.end('about server')
else if(req.url==='/faq')
{res.end('faq')
}
else
res.end('<h1>OOPs</h1>  <a href="/">Back to Server</a>')
})

server.listen(3000)
