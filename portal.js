class Portal {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        this.sprite = new Animator(ASSET_MANAGER.getAsset("./Sprites/Portal.png"),
            0, 0, 32, 32, 6, 0.1);
    }

    update() {}

    draw(ctx) {
        this.sprite.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2.5);
    }
}