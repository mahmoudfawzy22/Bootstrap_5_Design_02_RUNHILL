// Hero Slider
const sliderTrack = document.querySelector('.features .slider-track');
const boxes = document.querySelectorAll('.features .box');
const leftRow = document.querySelector('.features .left-row');
const rightRow = document.querySelector('.features .right-row');

let currentSlide = 0;

function updateSlide() {
  sliderTrack.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

leftRow.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + boxes.length) % boxes.length;
  updateSlide();
});

rightRow.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % boxes.length;
  updateSlide();
});

// Project Section Slider
const projectTrack = document.querySelector('.project-track');
const leftRowProject = document.querySelector('.project .left-row');
const rightRowProject = document.querySelector('.project .right-row');

let currentProjectSlide = 0;
const totalProjectSlides = projectTrack.children.length;

function updateProjectSlide(direction) {
  if (direction === 'left') {
    currentProjectSlide = (currentProjectSlide - 1 + totalProjectSlides) % totalProjectSlides;
  } else {
    currentProjectSlide = (currentProjectSlide + 1) % totalProjectSlides;
  }

  const slideWidth = 100 / totalProjectSlides;
  projectTrack.style.transform = `translateX(-${currentProjectSlide * slideWidth}%)`;
}

leftRowProject.addEventListener('click', () => updateProjectSlide('left'));
rightRowProject.addEventListener('click', () => updateProjectSlide('right'));

// Video Toggle
const EL_video = document.querySelector('#video');
const EL_play = document.querySelector('.play-icon');

EL_play.addEventListener('click', () => {
  const isPaused = EL_video.paused;
  if (isPaused) {
    EL_video.classList.remove('u-none');
    EL_video.play();
  } else {
    EL_video.pause();
    EL_video.classList.add('u-none');
  }
});
