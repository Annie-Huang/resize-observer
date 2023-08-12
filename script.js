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

// The ResizeObserver is quite performant because it's doing all the checks internally inside
// your browser and you don't have to worry about doing polling or a bunch of like window resize event.
// These size changes can occur in many ways such as the window size changing, elements being added/removed from the page, user interaction, and much more.
//
// It is useful because sometimes your element resize not triggered by you resize the screen, so you cannot use media query (because you whole screen size has not changed)
// e.g. when you add things into a editable content that cause the sibling box to shrink.
// In such cause the ResizeObserver is the perfect solution
const observer = new ResizeObserver((entries) => {
  console.log(entries);

  const boxElement = entries[0];
  const isSmall = boxElement.contentRect.width < 150; // 150px
  boxElement.target.style.backgroundColor = isSmall ? 'blue' : 'red';
});

observer.observe(box);
// observer.observe(container);
