//input Event
let inp = document.querySelector("#inp");
inp.addEventListener("input",function(event){
    event.preventDefault();
    let p = document.querySelector("p");
    console.log(p.innerHTML = inp.value);
});

//change Event
let inp2 = document.querySelector("#inp2");
inp2.addEventListener("change",function(event){
    event.preventDefault();
    let h1 = document.querySelector("h1");
    console.log(h1.innerHTML = inp2.value);
});