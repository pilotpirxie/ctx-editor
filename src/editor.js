// SCALE
// set scale
document.addEventListener("mousewheel", _wheel => {

    // check if is scrolled in or out
    if ( _wheel.deltaY > 0 ) {

        // check if zoom is smaller than 2
        if ( editorSettings.scale > 0.5 ) {
            editorSettings.scale -= 0.1;
        } else {
            editorSettings.scale = 0.5;
        }
    } else {
        if ( editorSettings.scale < 4 ) {
            editorSettings.scale += 0.1;
        } else {
            editorSettings.scale = 4;
        }
    }
});

// GRID LINES
// container for all horizontal and vertical lines
let editorLines = new PIXI.Container();

// UPDATE FUNCTION
app.ticker.add((delta) => {
    // before prepare new frame with lines, remove all lines from previous frame
    editorLines.removeChildren();

    // vertical lines
    for ( let i = 1; i < window.innerWidth/editorSettings.gridX * Math.pow(editorSettings.scale, -1); i++) {
        line = new Line([i*editorSettings.gridX, 0, i*editorSettings.gridX, window.innerHeight * Math.pow(editorSettings.scale, -1)], 1 / editorSettings.scale, 0x5c4e4b);
        editorLines.addChild(line);
    }

    // horizontal lines
    for ( let i = 1; i < window.innerHeight/editorSettings.gridY * Math.pow(editorSettings.scale, -1); i++) {
        line = new Line([0, i*editorSettings.gridY, window.innerWidth * Math.pow(editorSettings.scale, -1), i*editorSettings.gridY], 1 / editorSettings.scale, 0x5c4e4b);
        editorLines.addChild(line);
    }

    // show lines
    app.stage.addChild(editorLines);

    // set scale
    app.stage.scale.set(editorSettings.scale);

    console.log(editorLines.children.length);
});
