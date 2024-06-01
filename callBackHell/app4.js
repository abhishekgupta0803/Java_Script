let h1 = document.querySelector("h1");

function changeColour(color, delay){
    return new Promise((resolved, rejected)=>{
        setTimeout(()=>{
        h1.style.color = color;
        resolved();

        },delay);
    });
}

//promise chaining

changeColour("red",1000,)
.then(()=>{
    console.log("Red Color is created");
    return changeColour("blue",1000);

})
.then(()=>{
    console.log("blue  Color is created");
    return changeColour("pink",1000);
})
.then(()=>{
    console.log("Pink color is generated");
})
.catch(()=>{
    console.log("Color Failure");
});
