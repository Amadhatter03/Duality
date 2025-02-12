class World {
    constructor(game, x, y, level, reality) {
        Object.assign(this, {game, x, y, level, reality});

        this.levels = [];
        this.loadLevels();
    }

    loadLevels() {
        for (let i = 0; i < 3; i++) { // one level (so far)
            this.levels.push([]);
            for (let j = 0; j < 2; j++) { // two realities
                this.levels[i].push([]);
            }
        }

        this.levels[0][0] = new Animator(
            ASSET_MANAGER.getAsset("./Sprites/Test Map A.png"),
            0, 0, 512, 384, 1, 1);

        this.levels[0][1] = new Animator(
            ASSET_MANAGER.getAsset("./Sprites/Test Map B.png"),
            0, 0, 512, 384, 1, 1);
        this.levels[1][0] = new Animator(
            ASSET_MANAGER.getAsset("./Sprites/Test Map A.png"),
            0, 0, 512, 384, 1, 1);

        this.levels[1][1] = new Animator(
            ASSET_MANAGER.getAsset("./Sprites/Test Map B.png"),
            0, 0, 512, 384, 1, 1);
    }

    update() {}

    draw(ctx) {
        this.levels[this.level][this.reality].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
    }
}  