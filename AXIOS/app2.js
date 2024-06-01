let btn = document.querySelector("button");
btn.addEventListener("click",async()=>{
    let fact = await getFacts();
    let p = document.querySelector("#data");
    p.innerText = fact;
    console.log(fact);
});
let url = "https://catfact.ninja/fact";
async function getFacts(){
    try{
        let resp = await axios.get(url);
        return resp.data.fact;
    }catch(error){
        console.log("Error -",error);
    }
}
