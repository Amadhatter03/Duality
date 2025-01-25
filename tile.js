class Tile {
    constructor(game, x, y, path, spriteX, spriteY, width, height) {
        Object.assign(this, {game, x, y});

        // Due to multiple types of tiles, you need to specify more to get sprite
        this.sprite = new Animator(ASSET_MANAGER.getAsset(path),
            spriteX, spriteY, width, height, 1, 1);
    }

    update() {}

    draw(ctx) {
        this.sprite.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }
}