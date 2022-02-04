const docRoot = document.querySelector('#root');

const canvasOptions = {
    height: window.innerHeight,
    width: window.innerWidth,
};

const canvas = createCanvas(canvasOptions);
const context = canvas.getContext('2d');

function createCanvas ({
    width, 
    height,
    withBorder = false,
}) {
    const canvas = document.createElement('canvas');
    canvas.id = "canvas__main";
    canvas.height = height;
    canvas.width = width;
    withBorder && (canvas.style.border = "1px solid black");

    return canvas; 
};

function appendToElement (element, appendable) {
    element.appendChild(appendable);
};

// Drawing a rectangle using filRect is a shortcut.
// It is actually doing 3 things under the hood.

// first it tells the context we are stating a new path.
// next it tells the context we want to draw a rectangle without fill
// finally it fills the rect with color, or to simply draw the outline (fill or stroke).
context.beginPath();
context.rect(100, 520, 400, 400);
context.stroke();

context.fillStyle = 'blue';
context.fillRect(100, 100, 400, 400);

// The arguments supplied to fillRect are coordinates on the 2D space.
// The first two represent pixels to the right and pixels down on our page
// this becomes the starting point for our drawing. 

// The next two are our height and width, here we tell JS to fill 400 pixels
// to the right and 400 down. Remember that 0,0 is the top left plane of the 
// canvas.

appendToElement(
    docRoot,
    canvas
);