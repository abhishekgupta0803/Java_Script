//Result and Error Promises

function savetoDB(data){
    return new Promise((resolved,rejected)=>{
        let internet = Math.floor(Math.random()*10)+1;

        if(internet > 4){
            resolved("Sucess:");
        }else{
            rejected("Failure:");
        }
    });

}

savetoDB("ApnaCollege")
.then((result)=>{
    console.log("Return Value:",result);
    console.log("Sucess 1: data saved");
    return savetoDB("HelloWorld");

})
.then((result)=>{
    console.log(result);
    console.log("Sucess 2: data was saved");
})
.catch((error)=>{
    console.log("Error Value:",error);
    console.log("Failure: data is not saved");
});