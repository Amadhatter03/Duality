class LittleBox {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.BB = new BoundingBox(this.x, this.y, 32, 32);

        this.sprite = new Animator(ASSET_MANAGER.getAsset(
            "./Sprites/Action Pack - CITY/Action Pack - CITY/Assets/Assets_City.png"),
            80, 32, 16, 16, 1, 1);
    }

    updateBB() {
        this.BB = new BoundingBox(this.x, this.y, 32, 32);
    };

    updateLastBB() {
        this.lastBB = this.BB;
    };

    update() {
        this.updateLastBB();
        this.updateBB();
    }

    draw(ctx) {
        this.sprite.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);

        // Box debug (need to fix later)
        if(this.game.debug === true) {
            ctx.strokeStyle = "green"; // Box color
            ctx.lineWidth = 2; // Line thickness
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
    }
}