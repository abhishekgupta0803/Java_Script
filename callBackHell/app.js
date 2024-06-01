let h1 = document.querySelector("h1");

function changeColour(colour, delay, nextColourChange){
    setTimeout(()=>{
        h1.style.color = colour;
        if(nextColourChange) nextColourChange();
    },delay);
}


//call back function
changeColour("red",1000,()=>{
    changeColour("blue",1000,()=>{
        changeColour("pink",1000,()=>{
            changeColour("yellow",1000);
        });
    });

});  