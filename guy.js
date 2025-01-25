// Not implemented so far: updateBB, updateLastBB, die, update

class Guy {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.facing = 0; // 0 = right, 1 = left
        this.state = 0; // 0 = idle, 1 = walking, 2 = running, 3 = jumping/falling, 4 = dead
        this.dead = false;
        this.x  = 0;
        this.y  = 0;

        this.velocity = {x: 0, y: 0}; // NOT IMPLEMENTED YET
        this.fallAcc = 562.5; // NOT IMPLEMENTED YET

        this.animations = [];
        this.loadAnimations();
    };

    loadAnimations() {
        for (let i = 0; i < 5; i++) { // five states
            this.animations.push([]);
            for (let j = 0; j < 2; j++) { // two directions
                this.animations[i].push([]);
            }
        }

        // idle animation (state = 0), facing right (facing = 0)
        this.animations[0][0] = new Animator(ASSET_MANAGER.getAsset(
            "./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/Idle.png"),
            0, 0, 128, 128, 7, 0.1);

        // idle animation (state = 0), facing left (facing = 1)
        this.animations[0][1] = new Animator(ASSET_MANAGER.getAsset(
            "./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/IdleLeft.png"),
            0, 0, 128, 128, 7, 0.1);

        // walk animation (state = 1), facing right (facing = 0)
        this.animations[1][0] = new Animator(ASSET_MANAGER.getAsset(
            "./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/Walk.png"),
            0, 0, 128, 128, 10, 0.1);

        // walk animation (state = 1), facing left (facing = 1)
        this.animations[1][1] = new Animator(ASSET_MANAGER.getAsset(
            "./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/WalkLeft.png"),
            0, 0, 128, 128, 10, 0.1);

        // run animation (state = 2), facing right (facing = 0)
        this.animations[2][0] = new Animator(ASSET_MANAGER.getAsset(
            "./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/Run.png"),
            0, 0, 128, 128, 10, 0.1);

        // run animation (state = 2), facing left (facing = 1)
        this.animations[2][1] = new Animator(ASSET_MANAGER.getAsset(
            "./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/RunLeft.png"),
            1280 - 128, 0, 128, 128, 10, 0.1);

        // jump animation (state = 3), facing right (facing = 0)
        this.animations[3][0] = new Animator(ASSET_MANAGER.getAsset(
            "./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/Jump.png"),
            0, 0, 128, 128, 10, 0.1);

        // jump animation (state = 3), facing left (facing = 1)
        this.animations[3][1] = new Animator(ASSET_MANAGER.getAsset(
            "./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/JumpLeft.png"),
            1280 - 128, 0, 128, 128, 10, 0.1);

        // dead animation (state = 4), facing right (facing = 0)
        this.animations[4][0] = new Animator(ASSET_MANAGER.getAsset(
            "./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/Dead.png"),
            0, 0, 128, 128, 5, 0.1);

        // dead animation (state = 4), facing left (facing = 1)
        this.animations[4][1] = new Animator(ASSET_MANAGER.getAsset(
            "./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/DeadLeft.png"),
            640 - 128, 0, 128, 128, 5, 0.1);
    };

    die() {
        // NOT IMPLEMENTED YET
    };

    update() {
        const TICK = this.game.clockTick;
        const MIN_WALK = 4.453125;
        const MAX_WALK = 93.75;
        if (this.game.active != true){
            this.state = 0;
            //this.x -= MIN_WALK + this.game.clockTick;
        }
        if (this.game.left == true) {
            this.facing = 1;
            this.state = 1;
            this.x -= MIN_WALK + this.game.clockTick;
        } else if (this.game.right == true) {
            this.facing = 0;
            this.state = 1;
            this.x += MIN_WALK + this.game.clockTick;
        }
    }

    draw(ctx) {
        // ADD SCALE LATER ON?/CHANGE HOW I DID SCALING IN ANIMATOR.JS?
        if (this.dead) {
            this.animations[4][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y);
        } else {
            console.log(this.animations[this.state][this.facing]);
            this.animations[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y);
        }
    }
}