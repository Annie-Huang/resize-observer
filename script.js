const box = document.querySelector('.box');
const container = document.querySelector('.container');

/*
Each ResizeObserverEntry has the following attributes {
  borderBoxSize: [{
    blockSize
    inlineSize
  }]
  contentBoxSize
  contentRect: {     <----- actual shape of the element
    bottom
    height
    left
    right
    top
    width
    x
    y
  }
  devicePixelContentBoxSize
  target: div.box          !!! <----- The actual thing we are observing
}
*/

const observer = new ResizeObserver((entries) => {
  console.log(entries);
});

observer.observe(box);
observer.observe(container);
