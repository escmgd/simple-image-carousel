const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const allImages = document.querySelectorAll('.image');
const lastIndex = allImages.length - 1;

console.log(btnLeft, btnRight, allImages, lastIndex);

btnRight.addEventListener('click', function () {
  const current = document.querySelector('.current');
  if (current) {
    current.classList.remove('current');
    if (current.nextElementSibling) {
      current.nextElementSibling.classList.add('current');
    } else {
      allImages[0].classList.add('current');
    }
  }
});

btnLeft.addEventListener('click', function () {
  const current = document.querySelector('.current');
  if (current) {
    current.classList.remove('current');
    if (current.previousElementSibling) {
      current.previousElementSibling.classList.add('current');
    } else {
      allImages[lastIndex].classList.add('current');
    }
  }
});
