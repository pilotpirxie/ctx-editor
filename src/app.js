// main object
const app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor : 0x494949});

// handle resize
window.addEventListener("resize", function() {
  app.renderer.resize(window.innerWidth, window.innerHeight);
});

// append canvas
document.body.appendChild(app.view);
