class KillBox {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        this.BB = new BoundingBox(this.x, this.y, 32, 32);
    }

    update() {}

    draw(ctx) {
        ctx.strokeStyle = "red"; // Box color
        ctx.lineWidth = 2; // Line thickness
        ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
    }
}