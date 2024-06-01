let btn = document.querySelector("button");
btn.addEventListener("click",async()=>{
    let link = await getImage();
    let img = document.querySelector("#image");
    img.setAttribute("src",link);
    console.log(link);

});

let url = "https://dog.ceo/api/breeds/image/random";
async function getImage(){
    try{
        let resp = await axios.get(url);
        return resp.data.message;

    }catch(error){
        console.log(error);
    }
}