// Not implemented so far: updateBB, updateLastBB, die, update

class Guy {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.facing = 0; // 0 = right, 1 = left
        this.state = 0; // 0 = idle, 1 = walking, 2 = running, 3 = jumping/falling, 4 = dead
        this.dead = false;
        // Start Pos
        this.x  = x;
        this.y  = y;

        this.velocity = {x: 0, y: 0}; // NOT IMPLEMENTED YET
        this.fallAcc = 562.5; // NOT IMPLEMENTED YET

        this.BB = new BoundingBox(this.x, this.y, 128, 128);

        this.updateBB();

        // Guy's animations
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

    updateBB() {
        this.BB = new BoundingBox(this.x, this.y, 128, 128);
        // Mario code for BB updating
        // if (this.size === 0 || this.size === 3) {
        //     this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
        // }
        // else {
        //     if (this.game.down) // big mario is crouching
        //         this.BB = new BoundingBox(this.x, this.y + PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
        //     else 
        //         this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH * 2);
        // }
    };

    updateLastBB() {
        this.lastBB = this.BB;
    };
    
    die() {
        // NOT IMPLEMENTED YET
    };

    update() {
        const TICK = this.game.clockTick;
        const MIN_WALK = 2.453125;
        const MAX_WALK = 93.75;
        const MAX_FALL = 270;
        const FALL = 1800;
        const FALL_A = 421.875;
        const ACC_WALK = 133.59375;

        // update velocity
        if (this.state !== 3) { // not jumping
            // ground physics
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

            this.velocity.y += this.fallAcc * TICK;

            if (this.game.jump) { // jump
                this.velocity.y = -240;
                this.fallAcc = FALL;
                this.state = 3;
            }
        } else {
            // air physics
            // vertical physics
            if (this.velocity.y < 0 && this.game.jump) { // holding space while jumping jumps higher
                if (this.fallAcc === FALL) this.velocity.y -= (FALL - FALL_A) * TICK;
            }

            // horizontal physics
            if (this.game.right && !this.game.left) {
                this.velocity.x += ACC_WALK * TICK;
            } else if (this.game.left && !this.game.right) {
                this.velocity.x -= ACC_WALK * TICK;
            } else {
                // do nothing
            }
        }

        this.velocity.y += this.fallAcc * TICK;

            // max speed calculation
            if (this.velocity.y >= MAX_FALL) this.velocity.y = MAX_FALL;
            if (this.velocity.y <= -MAX_FALL) this.velocity.y = -MAX_FALL;

            if (this.velocity.x >= MAX_WALK) this.velocity.x = MAX_WALK;
            if (this.velocity.x <= -MAX_WALK) this.velocity.x = -MAX_WALK;


            // update position
            this.x += this.velocity.x * TICK;
            this.y += this.velocity.y * TICK;
            console.log(this.x, this.y);
            this.updateLastBB();
            this.updateBB();

        // collision
        var that = this;
        // IDK WHY but this stops the character from fallling!!
        const tileHeight = 128; // CUZ OF SCALE
        this.game.entities.forEach(function (entity) {
            if (entity.BB && that.BB.collide(entity.BB)) {
                if (that.velocity.y > 0) { // falling
                    if ((entity instanceof Tile) // landing
                        && (that.lastBB.bottom) <= entity.BB.top) { // was above last tick
                        that.velocity.y = 0;
                        that.y = entity.BB.top - tileHeight;
                        console.log("detected collision @ ", entity.BB.left, entity.BB.top);
                        if(that.state === 3) that.state = 0; // set state to idle
                        that.updateBB();
                    }
                }
                else if (that.velocity.y < 0) { // jumping
                    if ((entity instanceof Tile) // hit ceiling
                        && (that.lastBB.top) >= entity.BB.bottom) { // was below last tick

                        if (that.BB.collide(entity.leftBB) && that.BB.collide(entity.rightBB)) { // collide with the center point of the brick
                            entity.bounce = true;
                            that.velocity.y = 0;
                        }
                        else if (that.BB.collide(entity.leftBB)) {
                            that.x = entity.BB.left - tileHeight;
                        }
                        else {
                            that.x = entity.BB.right;
                        }
                    }
                }
            }
        });
    }

    draw(ctx) {
        ctx.save(); // Save the current state of the canvas

        ctx.translate(this.x, this.y); // Translate to the character's position
        if (this.dead) {
            this.animations[4][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        } else {
            //console.log(this.animations[this.state][this.facing]);
            this.animations[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        }
        ctx.strokeStyle = 'Blue';
        ctx.strokeRect(this.x, this.y,128, 128);
        ctx.restore();
        ctx.strokeStyle = 'blue';
        ctx.strokeRect(0, 736, 300, 5);
    }
}