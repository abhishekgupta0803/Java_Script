function savetoDB(data, sucess, failue){
    let internet = Math.floor(Math.random()*10)+1;
    if(internet > 4){
        sucess();
    }else{
        failue();
    }

}

//call back 
savetoDB(
    "ApnaCollege",
    ()=>{
    console.log("sucess1: data was saved");
    savetoDB(
        "helloWorld",
        ()=>{
        console.log("sucess2: data was saved");
        savetoDB(
            "Abhishek",
            ()=>{
            console.log("sucess3: data was saved");
        },()=>{
            console.log("failure3: data not was saved");
        });
    },()=>{
        console.log("failure2: data not was saved");
    });
},()=>{
    console.log("failure1: data not was saved");
});