class World {
    constructor(game, x, y, level, reality) {
        Object.assign(this, {game, x, y, level, reality});

        this.levels = [];
        this.loadLevels();
    }

    loadLevels() {
        for (let i = 0; i < 4; i++) { // three levels + one winning level
            this.levels.push([]);
            for (let j = 0; j < 2; j++) { // two realities
                this.levels[i].push([]);
            }
        }

        // Level 0
        this.levels[0][0] = new Animator(
            ASSET_MANAGER.getAsset("./Sprites/Test Map A.png"),
            0, 0, 512, 384, 1, 1);
        this.levels[0][1] = new Animator(
            ASSET_MANAGER.getAsset("./Sprites/Test Map B.png"),
            0, 0, 512, 384, 1, 1);

        // Level 1
        this.levels[1][0] = new Animator(
            ASSET_MANAGER.getAsset("./Sprites/Test Map A.png"),
            0, 0, 512, 384, 1, 1);
        this.levels[1][1] = new Animator(
            ASSET_MANAGER.getAsset("./Sprites/Test Map B.png"),
            0, 0, 512, 384, 1, 1);
        
        // Level 2
        this.levels[2][0] = new Animator(
            ASSET_MANAGER.getAsset("./Sprites/Test Map A.png"),
            0, 0, 512, 384, 1, 1);
        this.levels[2][1] = new Animator(
            ASSET_MANAGER.getAsset("./Sprites/Test Map B.png"),
            0, 0, 512, 384, 1, 1);

        // Winning level
        this.levels[3][0] = new Animator(
            ASSET_MANAGER.getAsset("./Sprites/Win A.png"),
            0, 0, 512, 384, 1, 1);
        this.levels[3][1] = new Animator(
            ASSET_MANAGER.getAsset("./Sprites/Win B.png"),
            0, 0, 512, 384, 1, 1);
    }

    update() {}

    draw(ctx) {
        this.levels[this.level][this.reality].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
    }
}  