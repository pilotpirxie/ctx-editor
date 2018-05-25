// container for all horizontal and vertical lines
let _editorLines = new PIXI.Container();

app.ticker.add((delta) => {
    // before prepare new frame with lines, remove previous
    _editorLines.removeChildren();
    for ( let i = 0; i < window.innerWidth/32; i++) {
        line = new Line([i*32, 0, i*32, window.innerHeight], 1, 0x5c4e4b);
        _editorLines.addChild(line);
    }

    for ( let i = 0; i < window.innerHeight/32; i++) {
        line = new Line([0, i*32, window.innerWidth, i*32], 1, 0x5c4e4b);
        _editorLines.addChild(line);
    }

    app.stage.addChild(_editorLines);
});
