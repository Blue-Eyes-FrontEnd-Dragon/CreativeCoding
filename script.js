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

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        const width = 60;
        const height = 60; 
        const gap = 20;
        const x = 100 + (width + gap) * i; 
        const y = 100 + (height + gap) * j;
    
        context.beginPath();
        context.rect(x, y, width, height);
        context.stroke();

        if ((i % 2) > 0 || (j % 2) > 0) {
            context.beginPath();
            context.rect(x + 8, y + 8, width - 16, height - 16);
            context.stroke();
        }
    }
}

appendToElement(
    docRoot,
    canvas
);