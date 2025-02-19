class Box {
    constructor(game, x, y, scale) {
        Object.assign(this, {game, x, y, scale});

        this.BB = new BoundingBox(this.x, this.y, 32 * this.scale, 32 * this.scale);

        this.sprite = new Animator(ASSET_MANAGER.getAsset(
            "./Sprites/Action Pack - CITY/Action Pack - CITY/Assets/Assets_City.png"),
            80, 32, 16, 16, 1, 1);
    }

    updateBB() {
        this.BB = new BoundingBox(this.x, this.y, 16 * this.scale, 16 * this.scale);
    };

    updateLastBB() {
        this.lastBB = this.BB;
    };

    update() {
        // // Collision
        // var that = this;

        // this.game.entities.forEach(function (entity) {
        //     if (entity.BB && that.BB.collide(entity.BB)) {
        //         if ((entity instanceof LeftBoundary)) {

        //         }
        //         else if(entity instanceof RightBoundary) { // Right side of world
        //             that.x = entity.BB.left - that.width * that.scale;
        //         }
        //     }
        // });
        this.updateLastBB();
        this.updateBB();
    }

    draw(ctx) {
        this.sprite.drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scale);

        // Box debug (need to fix later)
        if(this.game.debug === true) {
            ctx.strokeStyle = "green"; // Box color
            ctx.lineWidth = 2; // Line thickness
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
    }
}