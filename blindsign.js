class BlindSign {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.BB = new BoundingBox(this.x + 10, this.y + 8, 40, 50);

        this.sprite = new Animator(ASSET_MANAGER.getAsset("./Sprites/Free Industrial Zone Tileset/3 Objects/Pointer1.png"),
            0, 0, 32, 32, 1, 1);
    }

    update() {}

    draw(ctx) {
        this.sprite.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1.9);

        if(this.game.debug === true) {
            ctx.strokeStyle = "green"; // Box color
            ctx.lineWidth = 2; // Line thickness
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
    }
}

class BlindBox {
    constructor(game, x, y, width, height) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    update() {}

    draw(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}