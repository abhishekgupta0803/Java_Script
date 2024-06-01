let url = "https://quote-garden.onrender.com/api/v3/quotes";

async function getFetch(){
    try{
        let resp = await fetch(url);
        let data = await resp.json();
        console.log("resp 1:",data);
        let resp1 = await fetch(url);
        let data1 = await resp1.json();
        console.log("resp 2:",data1);
        
    }catch(error){
        console.log(error);
    }
   
}