let url = "https://quote-garden.onrender.com/api/v3/quotes";

fetch(url)
.then((resp)=>{
    console.log(resp);//return promises
    return resp.json();
})
.then((data)=>{
    console.log("Data 1:",data.message);
    return fetch(url);
})
.then((resp)=>{
    console.log(resp);
    return resp.json();
})
.then((data2)=>{
    console.log("data 2:",data2.message);
})
.catch((err)=>{
    console.log(err);
});