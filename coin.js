class Coin {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        // Bounding Box
        this.BB = new BoundingBox(this.x, this.y, 16, 16);

        this.sprite = new Animator(ASSET_MANAGER.getAsset("./Sprites/SpinningCoin/SpinningCoin/Spinning Coin.png"), 0,0,16.0008,16,8, 0.1);
    }

    update() {}

    draw(ctx) {
        this.sprite.drawFrame(this.game.clockTick, ctx, this.x, this.y,1);
        if(this.game.debug === true) {
            ctx.strokeStyle = "green"; // Box color
            ctx.lineWidth = 2; // Line thickness
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
    }
}