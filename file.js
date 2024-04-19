const fs=require('fs');


 fs.readFile("./contacts.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error",err);
    }else{
        console.log(result);
    }
 })
 fs.appendFileSync("./test.txt","Hello ji \n");
 fs.appendFileSync("./test.txt",`${Date.now()},Hey there`);
 fs.cpSync("./contacts.txt","./test.txt");
 console.log(fs.statSync("./test.txt").isFile());