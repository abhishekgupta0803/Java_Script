let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let h2 = document.querySelector("h2");

function changeColor(){
    this.style.background ="blue";
}

btn.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);
h2.addEventListener("click",changeColor);

