const fs = require("fs");

// synchronous call ... blocking 
//fs.writeFileSync('./test.txt','hey there');

//      Async ..... non blocking
//fs.writeFile('./test.txt',"hello this is async...",(err) => "error");

//const result = fs.readFileSync('./contacts.txt',"utf-8");
//console.log(result);


// async doesnot return anything it requires a callback/......

/*
fs.readFile("./contacts.txt","utf-8",(err,result)=>{
    if(err){
        console.log("err: ",err);
    }else{
        console.log(result);
    }
})
    */

//fs.appendFileSync("./test.txt","hey there\n" );

fs.unlinkSync("./test.text");