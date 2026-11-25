const main = document.getElementById("main");
const coin = document.getElementById("coin");
let isFlipping = false;

main.addEventListener("click", function(event){
    if (isFlipping) return;
    event.preventDefault();
     isFlipping = true;
    coin.classList.add("flipping");
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    setTimeout(() => {
        document.querySelector("img").src = `./assets/${result.toLowerCase()}.svg`;
    }, 750);
    setTimeout(() => {
        document.querySelector("p").textContent = result;
        coin.classList.remove("flipping");
        isFlipping = false;
    }, 1500);
})