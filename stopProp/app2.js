let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {

    let items = document.createElement("li");
    items.append(inp.value);
    let button = document.createElement("button");
    button.classList.add(".delete");
    button.innerText = "delete";
    items.appendChild(button);
    ul.appendChild(items);
    inp.value = "";

});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});
