let div = document.querySelector("div");
let ul = document.querySelector("ul");
let list = document.querySelectorAll("li");

div.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("div click");
});

ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul click");
});

for(lst of list){
    lst.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("li is click");
    });
}