
  
const coloredBoxes = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  coloredBoxes.forEach(box => {
    if (
      box.getBoundingClientRect().top <= document.body.scrollTop
    ) {
      document.body.style.backgroundColor = box.dataset.color;
    }
  });
});
