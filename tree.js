class Tree {
    constructor(game, x, y, spriteName) {
        Object.assign(this, {game, x, y, spriteName});

        // Bounding Box
        this.BB = new BoundingBox(this.x, this.y, 62, 32);

        // Due to multiple types of tiles, you need to specify more to get sprite
        switch(spriteName) {
            case "STree":
                this.sprite = new Animator(ASSET_MANAGER.getAsset("./Sprites/Trees/TREE 7_SANDY GREEN.png"), 0, 0, 33, 35, 1, 1);
                break;
            case "BTree":
                this.sprite = new Animator(ASSET_MANAGER.getAsset("./Sprites/Trees/TREE 4_ SANDY GREEN.png"), 0, 0, 46, 68, 1, 1);
                break;
        }
    }

    update() {}

    draw(ctx) {
        if(this.spriteName === "STree") {
            this.sprite.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        } else {
            this.sprite.drawFrame(this.game.clockTick, ctx, this.x, this.y, 3);
        }
        if(this.game.debug === true) {
            ctx.strokeStyle = "green"; // Box color
            ctx.lineWidth = 2; // Line thickness
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
    }
}