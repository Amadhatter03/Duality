class Tile {
    constructor(game, x, y, spriteName) {
        Object.assign(this, {game, x, y});

        // Bounding Box
         this.BB = new BoundingBox(this.x, this.y, 32, 16);
        // this.BB = new BoundingBox(this.x, this.y, this.w, PARAMS.BLOCKWIDTH * 2);
        // this.leftBB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH * 2)
        // this.rightBB = new BoundingBox(this.x + this.w - PARAMS.BLOCKWIDTH, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH * 2)

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
    }
}