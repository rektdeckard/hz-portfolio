let canvas = document.getElementById("static");
let context = canvas.getContext("2d");
let { offsetHeight, offsetWidth } = canvas;
canvas.width = offsetWidth;
canvas.height = offsetHeight;
let pixelSize = 1;

let idata = context.createImageData(offsetWidth, offsetHeight);
let buffer = new Uint32Array(idata.data.buffer);

// (function loop() {
//   noise(context);
//   requestAnimationFrame(loop);
// })();

function noise(context) {
  let len = buffer.length - 1;
  while (len--) {
    buffer[len] = Math.random() < 0.5 ? 0 : -1 >> 0;
  }
  context.putImageData(idata, 0, 0);
};

setInterval(() => noise(context), 24);
