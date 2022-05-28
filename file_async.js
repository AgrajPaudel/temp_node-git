const filee=require('fs')

var first,second
const x=filee.readFile('./content/student.txt','utf-8',(err,result)=>{
    if (err)
    {
    console.log("File not found")
    return;
    }
    else
    {
        console.log(result)
    }
})


const y=filee.readFile('./content/employee.txt','utf-8',(err,result)=>{
    if (err)
    {
    console.log("File not found")
    return;
    }
    else
    {
        console.log(result)
    }
})

