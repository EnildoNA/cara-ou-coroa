const button = document.getElementById("flip");
const main = document.getElementById("main");

main.addEventListener("click", function(event){
    event.preventDefault();
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    document.querySelector("p").textContent = result;
    document.querySelector("img").src = `./assets/${result.toLowerCase()}.svg`
})