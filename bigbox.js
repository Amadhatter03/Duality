class BigBox {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        this.sprite = new Animator(ASSET_MANAGER.getAsset(
            "./Sprites/Action Pack - CITY/Action Pack - CITY/Assets/Assets_City.png"),
            48, 32, 32, 32, 1, 1);
    }

    update() {}

    draw(ctx) {
        this.sprite.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
    }
}