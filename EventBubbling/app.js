let div = document.querySelector("div");
let ul = document.querySelector("ul");
let list = document.querySelectorAll("li");

div.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("div is clicked")
});

ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul is clicked")
});

for(lst of list){
    lst.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("lists is clicked");
    });
}