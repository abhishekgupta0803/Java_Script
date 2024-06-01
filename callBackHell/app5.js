/*
async function greet(){
    //throw  "Error";
    return "Hello World";
}
greet()
.then(()=>{
   
    console.log("Sucess :");
    greet()
})
.then(()=>{
    console.log("Sucess2");
})
.catch(()=>{
    console.log("Not Sucess");
});

let h1 = document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            console.log("Change Color is:",color);
            resolve("Color Changed");
        },delay);
    });
}

async function demo(){
   await changeColor("pink",1000);
   await changeColor("red",1000);
   await changeColor("blue",1000);
   await changeColor("green",1000);
    changeColor("yellow",1000);
}


function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let random = Math.floor(Math.random()*10)+1;
            console.log(random);
            resolve();
        },1000);
    });
}

async function demo(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}
*/


