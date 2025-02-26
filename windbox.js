class WindowBox {
    constructor(game, x, y, width, height, direction) {
        Object.assign(this, {game, x, y, width, height, direction});
        this.BB = new BoundingBox(this.x, this.y, this.width, this.height);
    }

    update() {}

    draw(ctx) {
        if(this.game.debug === true) {
            ctx.strokeStyle = "white"; // Box color
            ctx.lineWidth = 2; // Line thickness
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
    }
}