class KillBox {
    constructor(game, x, y, width, height) {
        Object.assign(this, {game, x, y, width, height});
        this.BB = new BoundingBox(this.x, this.y, this.width, this.height);
    }

    update() {}

    draw(ctx) {
        if(this.game.debug === true) {
            ctx.strokeStyle = "red"; // Box color
            ctx.lineWidth = 10; // Line thickness
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
    }
}