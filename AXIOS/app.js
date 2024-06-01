let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let resp =  await axios.get(url);
        console.log(resp.data.fact);

    }catch(error){
        console.log(error);
    }
}