class Waterfall{
    constructor(game, x, y, type) {
        Object.assign(this, {game, x, y, type});

        this.waterType = type; 

        // Bounding Box
        this.BB = new BoundingBox(this.x + 3, this.y, 42, 48);

        // Specify the water type
        switch(type) {
            case "blue":
                this.sprite = new Animator(ASSET_MANAGER.getAsset("./Sprites/waterfall/waterfall_blue_single-Sheet.png"), 0, 0, 16, 16, 16, 0.1);
                break;
            case "green":
                this.sprite = new Animator(ASSET_MANAGER.getAsset("./Sprites/waterfall/waterfall_green_single-Sheet.png"), 0, 0, 16, 16, 16, 0.1);
                break;
            default:
                // default to blue water
                this.sprite = new Animator(ASSET_MANAGER.getAsset("./Sprites/waterfall/waterfall_green_single-Sheet.png"), 0, 0, 16, 16, 16, 0.1);
        }
    }

    update() {}

    draw(ctx) {
        this.sprite.drawFrame(this.game.clockTick, ctx, this.x, this.y, 3);
        if(this.game.debug === true) {
            ctx.strokeStyle = "green"; // Box color
            ctx.lineWidth = 2; // Line thickness
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
    }
}
class Grate{
    constructor(game, x, y, type) {
        Object.assign(this, {game, x, y, type});

        this.waterType = type; 

        // Specify the water type
        switch(type) {
            case "blue":
                this.sprite = new Animator(ASSET_MANAGER.getAsset("./Sprites/waterfall/waterfall_blue_gate-Sheet.png"), 0, 8, 16, 8, 16, 0.1);
                break;
            case "green":
                this.sprite = new Animator(ASSET_MANAGER.getAsset("./Sprites/waterfall/waterfall_green_gate-Sheet.png"), 0, 8, 16, 8, 16, 0.1);
                break;
            default:
                // default to blue water
                this.sprite = new Animator(ASSET_MANAGER.getAsset("./Sprites/waterfall/waterfall_blue_gate-Sheet.png"), 0, 8, 16, 8, 16, 0.1);
        }
    }

    update() {}

    draw(ctx) {
        this.sprite.drawFrame(this.game.clockTick, ctx, this.x, this.y, 3);
    }
}