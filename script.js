const box = document.querySelector('.box');
const container = document.querySelector('.container');

const observer = new ResizeObserver((entries) => {
  console.log(entries);
});

observer.observe(box);
observer.observe(container);
