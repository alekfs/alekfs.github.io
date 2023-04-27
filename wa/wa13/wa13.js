const coin = document.querySelector("#coin");
const result = document.querySelector("#result");
const volumeSlider = document.querySelector("#volume");
const volumeDisplay = document.querySelector("#volumeDisplay");
const headsImageUrl = "heads.png";
const tailsImageUrl = "tails.png";
let volume = 0;
let isHeads = true;

function flipCoin() {
coin.style.animation = "none";
void coin.offsetWidth;
coin.style.animation = "spin 1s ease-in-out";

const randomNumber = Math.random();
    if (randomNumber >= 0.5) {
        volume += 5;
        result.textContent = "Heads! Volume increased by 5";
        coin.style.backgroundImage = `url(${headsImageUrl})`;
        isHeads = true;
    } else {
        volume -= 5;
        if (volume < 0) volume = 0;
        result.textContent = "Tails! Volume decreased by 5";
        coin.style.backgroundImage = `url(${tailsImageUrl})`;
        isHeads = false;
    }
    console.log(`Current volume: ${volume}`);
}

coin.addEventListener("click", flipCoin);
coin.addEventListener("animationend", function() {
volumeDisplay.textContent = `Volume: ${volume}`;
volumeSlider.value = volume;
});

volumeSlider.addEventListener("input", () => {
volume = volumeSlider.value;
console.log(`Current volume: ${volume}`);
volumeDisplay.textContent = `Volume: ${volume}`;
});
        
window.onload = () => {
    volumeSlider.value = volume;
};
