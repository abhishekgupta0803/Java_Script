let inp = document.querySelector("input");

inp.addEventListener("keydown",function(event){
    let p = document.querySelector("p");

    if(event.code == "ArrowUp"){
        p.innerHTML = "You Press Arrow up";
        p.style.color = "red";
    }if(event.code == "ArrowDown"){
        p.innerHTML = "You Press Arrow Down";
        p.style.color = "blue";
    }if(event.code == "ArrowLeft"){
        p.innerHTML = "You Press Arrow Left";
        p.style.color = "green";
    }if(event.code == "ArrowRight"){
        p.innerHTML = "You Press Arrow Right";
        p.style.color = "yellow";
    }
}); 