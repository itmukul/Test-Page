let button = document.getElementById('colorButton');
let body = document.getElementById('body');
let heading = document.getElementById('heading')

button.addEventListener("click",function() {
    if (body.classList.contains("OFF")) {
        body.classList.remove('OFF');
        body.classList.add('ON');
        heading.innerHTML = "You did it";

    }
    else {
        body.classList.remove("ON");
        body.classList.add("OFF");
        heading.innerHTML = "You did it AGAIN!";
    }
});