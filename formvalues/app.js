let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let inp = document.querySelector("#inp");
    let psw = document.querySelector("#psw");

    let usr = document.querySelector("#usr");
    let ps = document.querySelector("#ps");

    usr.innerHTML = `User Name is:${inp.value}`;
    ps.innerHTML = ` Password is :${psw.value}`;

    console.log(`Input is :${inp.value}`);
    console.log(`Password is :${psw.value}`);

});