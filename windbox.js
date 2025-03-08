class WindBox {
    constructor(game, x, y, width, height, direction) {
        Object.assign(this, {game, x, y, width, height, direction});
        this.BB = new BoundingBox(this.x, this.y + this.height, this.width * 2, this.height );
        this.sprite = new Animator(ASSET_MANAGER.getAsset("./Sprites/WindSprite.png"), 0,0,28.5,64,7, 0.1);
    }

    update() {}

    draw(ctx) {
        this.sprite.drawFrame(this.game.clockTick, ctx, this.x, this.y,2);
        if(this.game.debug === true) {
            ctx.strokeStyle = "white"; // Box color
            ctx.lineWidth = 2; // Line thickness
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
    }
}