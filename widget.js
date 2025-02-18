class Widget {
    constructor(game, level, puzzle) {
        Object.assign(this, {game, level, puzzle});
    };

    update() {};

    draw(ctx) {
        // Set font for text
        ctx.font = "bold 22px Courier New";

        // Create corner box
        ctx.fillStyle = "black";
        ctx.fillRect(850, 0, 174, 75);

        // Display current level and puzzle
        ctx.fillStyle = "white";
        ctx.fillText("Level: " + (this.level), 888, 29);
        ctx.fillText("Puzzle: " + (this.puzzle) + "/3", 865, 57);
    };
}