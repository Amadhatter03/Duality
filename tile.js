class Tile {
    constructor(game, x, y, spriteName) {
        Object.assign(this, {game, x, y, spriteName});

        // Bounding Box
        this.BB = new BoundingBox(this.x, this.y, 62, 32);

        // Due to multiple types of tiles, you need to specify more to get sprite
        switch(spriteName) {
            case "CITY1_TILE1":
                this.sprite = new Animator(ASSET_MANAGER.getAsset("./Sprites/Action Pack - CITY/Action Pack - CITY/Assets/Assets_City.png"), 208, 112, 32, 16, 1, 1);
                break;
            case "CITY2_TILE1":
                this.sprite = new Animator(ASSET_MANAGER.getAsset("./Sprites/Sidescroller Shooter - Central City/Sidescroller Shooter - Central City/Assets/Tiles.png"), 64, 112, 32, 16, 1, 1);
                break;
            default:
                // default to CITY2_TILE1
                this.sprite = new Animator(ASSET_MANAGER.getAsset("./Sprites/Sidescroller Shooter - Central City/Sidescroller Shooter - Central City/Assets/Tiles.png"), 64, 112, 32, 16, 1, 1);
          }
    }

    update() {}

    draw(ctx) {
        this.sprite.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
        if(this.game.debug === true) {
            ctx.strokeStyle = "green"; // Box color
            ctx.lineWidth = 2; // Line thickness
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
    }
}