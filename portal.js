class Portal {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.BB = new BoundingBox(this.x + 18, this.y, 48, 80);

        this.sprite = new Animator(ASSET_MANAGER.getAsset("./Sprites/Portal.png"),
            0, 0, 32, 32, 6, 0.1);
    }

    update() {}

    draw(ctx) {
        this.sprite.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2.5);

        if(this.game.debug === true) {
            ctx.strokeStyle = "green"; // Box color
            ctx.lineWidth = 2; // Line thickness
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
    }
}