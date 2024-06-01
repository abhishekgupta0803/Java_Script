//handlingRejection
let h1 = document.querySelector("h1");
function changeNameColour(color,delay){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            let random = Math.floor(Math.random()*10)+1;
            h1.style.color = color;
            if(random > 10){

                reject("Rejected:");
            }
            resolve("Sucess:");
        },delay);

    });
}
async function demo(){
    try{
        await changeNameColour("red",1000);
        await changeNameColour("pink",1000);
        await changeNameColour("yellow",1000);
        await changeNameColour("green",1000);
        await changeNameColour("purple",1000);

    }catch(error){
        console.log("Error",error);
    }
    let a = 8;
    console.log("A value is :");
    console.log(a);
}