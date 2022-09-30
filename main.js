
document.querySelector("#submitButton").addEventListener("click", sayGoodbye);

function sayGoodbye() {
    let foo = document.querySelector("h1");
    foo.innerText = "Goodbye World";
    foo.nextSibling.remove;
}