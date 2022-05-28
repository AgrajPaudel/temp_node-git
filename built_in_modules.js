//os modules
const os=require('os')
console.log(os.userInfo())
console.log(os.uptime())
if (os.uptime%5==0)
{
    console.log("multiple of 5")
}

const ag={
    time: os.uptime(),
    nam: os.name,
    host: os.hostname(),
    user: os.userInfo(),
    space:os.freemem()
}
console.log(ag.space)
sp=ag.space/(1024*1024*1024)
console.log('The free space in gb is '+sp)