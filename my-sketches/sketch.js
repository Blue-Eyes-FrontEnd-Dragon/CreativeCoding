const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height)

    const gridOptions = {
      width: 60,
      height: 60, 
      gap: 20, 
      rowLength: 5,
      columnLength: 5,
    };

    generateGrid(gridOptions);

    function generateGrid({
      width, 
      height, 
      gap, 
      rowLength, 
      columnLength,
    }) {
      let x, y;

      for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < columnLength; j++) {
          x = 100 + (width + gap) * i;
          y = 100 + (height + gap) * j;

          context.beginPath();
          context.rect(x, y, width, height);
          context.stroke();

          if (Math.random() > 0.5) {
            context.beginPath();
            context.rect(x + 8, y + 8, width - 16, height - 16);
            context.stroke();
          };
        };
      };
    };
  };
};

canvasSketch(sketch, settings);
