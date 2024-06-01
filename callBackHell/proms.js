//with promises

function savetoDB(data){
    return new Promise((resolved , rejected)=>{
        let internet = Math.floor(Math.random()*10)+1;
        if(internet > 4){
            resolved("Sucess: data was Saved");
        }else{
            rejected("Failed: data was not Saved")
        }

    });
}

savetoDB("ApnaCollege")
.then(()=>{
    console.log("Sucess:1 data saved");
    return savetoDB("helloWorld");
})
.then(()=>{
    console.log("Sucess:2 data saved");
    return savetoDB("Abhishek");
})
.then(()=>{
    console.log("Sucess:3 data was saved");
})
.catch(()=>{
    console.log(" data was not saved");
});