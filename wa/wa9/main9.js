const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit on the race track, so :insertx: decided to race. When he got to :inserty:, he looked at the other online opponents, ready to win. Then :insertz:. Bob (the person playing the character) could not describe how he was feeling, but in the end was not suprised, — :insertx: weighs 300 pounds. Sometimes thats what happens when you weigh that much. Good Games";
const insertX = ["Bowser", "Funky Kong", "Yoshi"];
const insertY = ["Luigi Circuit", "Rainbow Road", "Coconut Mall"];
const insertZ = ["the race began and the character disconnected from the online race.", "mid race they dodged the shock in a star and pulled the bullet at the next item set.", "just as they were going to get first place, he was hit by a blue shell right before the finish line."];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + " stone";
    const temperature =  Math.round((94-32) * 5 / 9) + " centigrade";
    newStory = newStory.replaceAll("94 fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}