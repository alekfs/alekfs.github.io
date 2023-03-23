// const displayedImage = document.querySelector('.displayed-img');
// const thumbBar = document.querySelector('.thumb-bar');

// const btn = document.querySelector('button');
// const overlay = document.querySelector('.overlay');

// /* Declaring the array of image filenames */

// /* Declaring the alternative text for each image file */

// /* Looping through images */

// const newImage = document.createElement('img');
// newImage.setAttribute('src', xxx);
// newImage.setAttribute('alt', xxx);
// thumbBar.appendChild(newImage);

// /* Wiring up the Darken/Lighten button */



const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5.jpg'];
const alts = {
  'p1.jpg' : 'Me in a bike race with the flatirons in the background',
  'p2.jpg' : 'My dog as a puppy',
  'p3.jpg' : 'Wave like patterns of snow from the ski lift',
  'p4.jpg' : 'My bike covered with snow',
  'p5.jpg' : 'Forest of Poland while biking'
}

/* Looping through images */

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
