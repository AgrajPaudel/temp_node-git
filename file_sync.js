const filee=require('fs')
x=filee.readFileSync('content/student.txt','utf8')
filee.writeFileSync('content/employee.txt',`:${x}`)
console.log(x)
