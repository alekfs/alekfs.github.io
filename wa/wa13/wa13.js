

// function check() {
//     console.log('test');
// }

// function submit() {
//     alert("Your volume is now: " + output.textContent);
// }

// function reset() {
//     outputInt = 0;
//     output.textContent = outputInt;
// }

// function minus() {
//     if (outputInt > 0) {
//     outputInt -=1;
//     output.textContent = outputInt; }
    
// }

// function plus() {
//     if (outputInt < 100) {
//     outputInt +=1;
//     output.textContent = outputInt;
//     }
// }

// function random() {
//     outputInt = randomNumber(0, 100);
//     output.textContent = outputInt;
// }

// function randomNumber(min, max) {
//     const num = Math.floor(Math.random() * (max - min + 1)) + min;
//     return num;
// }




// const output = document.querySelector('.output');
// let outputInt = parseInt(output.textContent);
// console.log(outputInt);

// const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
// const plusButton = document.querySelector('.plus-button').addEventListener('click', plus);
// const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
// const randomButton = document.querySelector('.random-button').addEventListener('click', random);
// const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);


// /* const button = document.querySelector('.button');
// const output = document.querySelector('.output');
// let phone_content = document.querySelector('.phone');

// button.addEventListener('click', updateOutput);

// function updateOutput() {
//     output.textContent = phone_content.value;
//     alert(phone_content.value);
// }
// */


// var slider = document.getElementById("myRange");
// var sliderSubmit = document.querySelector(".slider-submit-button").addEventListener('click', update);
// var sliderOutput = document.querySelector(".slider-output");


// // Update the current slider value (each time you drag the slider handle)
// function update() {
//   sliderOutput.textContent = slider.value;
// }
const coin = document.querySelector("#coin");
		const result = document.querySelector("#result");
		const volumeSlider = document.querySelector("#volume");
		const volumeDisplay = document.querySelector("#volumeDisplay");
        const headsImageUrl = "heads.png";
        const tailsImageUrl = "tails.png";
		let volume = 50;
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

