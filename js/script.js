const boxs = document.querySelectorAll('.features .box');
const leftRow = document.querySelector('.features .left-row');
const rightRow = document.querySelector('.features .right-row');

const projectImg = document.querySelector(".project .img-content img");
const leftRowProject = document.querySelector(".project .img-content .left-row");
const rightRowProject = document.querySelector(".project .img-content .right-row");

const imgs = [
  "http://127.0.0.1:5500/imgs/project-slide1.jpg",
  "http://127.0.0.1:5500/imgs/project-slide2.jpg",
  "http://127.0.0.1:5500/imgs/project-slide3.jpg"
];

function updateBox(direction) {
  const activeIndex = Array.from(boxs).findIndex(box => box.classList.contains('active'));
  boxs[activeIndex].classList.remove('active');

  const newIndex = direction === 'left'
    ? (activeIndex - 1 + boxs.length) % boxs.length
    : (activeIndex + 1) % boxs.length;

  boxs[newIndex].classList.add('active');
}

leftRow.addEventListener('click', () => updateBox('left'));
rightRow.addEventListener('click', () => updateBox('right'));


function updateImgProject(direction) {
  const currentSrc = projectImg.src;
  const activeIndex = imgs.findIndex(img => img === currentSrc);

  if (activeIndex === -1) return;

  let newIndex;
  if (direction === "left") {
    newIndex = (activeIndex - 1 + imgs.length) % imgs.length;
  } else {
    newIndex = (activeIndex + 1) % imgs.length;
  }

  projectImg.src = imgs[newIndex];
}

leftRowProject.addEventListener("click", () => updateImgProject("left"));
rightRowProject.addEventListener("click", () => updateImgProject("right"));
