const docRoot = document.querySelector('#root');

const canvasOptions = {
    height: window.innerHeight,
    width: window.innerWidth,
};

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

appendToElement(
    docRoot,
    createCanvas(canvasOptions)
);