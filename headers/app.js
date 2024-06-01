let url = "https://icanhazdadjoke.com/";

async function getHeader(){
    try{
        const config = {headers:{Accept:"application/json"}};
        let resp = await axios.get(url,config);
        console.log(resp.data);

    }catch(error){
        console.log(error);
    }
    
}
