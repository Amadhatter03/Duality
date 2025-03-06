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

class EndingWidget {
    constructor(game) {
        Object.assign(this, {game});
    };

    update() {};

    draw(ctx) {
        // Set font for text
        ctx.font = "bold 22px Courier New";

        // Display vacation spots
        ctx.fillStyle = "white";
        ctx.fillText("Beach", 210, 630);
        ctx.fillText("Mountains", 370, 630);
        ctx.fillText("Town", 585, 630);
        ctx.fillText("Forest", 756, 630);
    };
}