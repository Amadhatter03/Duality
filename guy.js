// Not implemented so far: updateBB, updateLastBB, die, update

class Guy {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.facing = 0; // 0 = right, 1 = left
        this.state = 0; // 0 = idle, 1 = walking, 2 = running, 3 = jumping/falling, 4 = dead
        this.dead = false;
        // Start Pos
        this.startX = x;
        this.startY = y;
        // x and y pos
        this.x = x;
        this.y = y;

        this.velocity = { x: 0, y: 0 };
        this.fallAcc = 1000;

        this.offsetBBx = 48
        this.offsetBBy = 60
        this.BBGuyWidth = 32
        this.BBGuyHeight = 68
        this.BB = new BoundingBox(this.x + this.offsetBBx, this.y + this.offsetBBy, this.BBGuyWidth, this.BBGuyHeight);

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
            0, 0, 128, 128, 10, 0.1);

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
        this.BB = new BoundingBox(this.x + this.offsetBBx, this.y + this.offsetBBy, this.BBGuyWidth, this.BBGuyHeight);
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

    decelerate() {
        const MIN_WALK = 50;
        const DEC_WALK = 1000;
        const TICK = this.game.clockTick;
        if (this.velocity.x > 0) {
            this.velocity.x -= DEC_WALK * TICK;
        }
        if (this.velocity.x < 0) {
            this.velocity.x += DEC_WALK * TICK;
        }
        // If the velocity is below a certain threshold, set it to zero to avoid small drifting
        if (Math.abs(this.velocity.x) < MIN_WALK) {
            this.velocity.x = 0;
        }
    }

    update() {
        const TICK = this.game.clockTick;
        //const MIN_WALK = 50;
        const MAX_WALK = 300;
        const MAX_FALL = 270;
        const FALL = 1800;
        const FALL_A = 421.875;
        const ACC_WALK = 300;
        //const DEC_WALK = 1000;
        const JUMP_VEL = -350; // -500

        // update velocity
        if (this.state !== 3) { // not jumping
            // ground physics
            if (this.game.active != true) {
                this.state = 0;
                //this.x -= MIN_WALK + this.game.clockTick;
            }
            if (this.game.left == true) {
                 // If moving left, check if we're moving right first and decelerate
                 if (this.velocity.x > 0) {
                    this.decelerate(); // Decelerate first before moving in the other direction
                }
                this.facing = 1;
                this.state = 1;
                this.velocity.x -= ACC_WALK * TICK;
            } else if (this.game.right == true) {
                // If moving right, check if we're moving left first and decelerate
                if (this.velocity.x < 0) {
                    this.decelerate(); // Decelerate first before moving in the other direction
                }
                this.facing = 0;
                this.state = 1;
                this.velocity.x += ACC_WALK * TICK;
            } else {
                // Decelerate 
                this.decelerate();
            }

            if (this.game.jump) { // jump
                this.velocity.y = JUMP_VEL;
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
                // Decelerate 
                this.decelerate();
            }
        }

        // Fall
        this.velocity.y += this.fallAcc * TICK;

        // max speed calculation
        if (this.velocity.y >= MAX_FALL) this.velocity.y = MAX_FALL;
        if (this.velocity.y <= -MAX_FALL) this.velocity.y = -MAX_FALL;

        if (this.velocity.x >= MAX_WALK) this.velocity.x = MAX_WALK;
        if (this.velocity.x <= -MAX_WALK) this.velocity.x = -MAX_WALK;


        // update position
        this.x += this.velocity.x * TICK;
        this.y += this.velocity.y * TICK;
        this.updateLastBB();
        this.updateBB();

        // collision
        var that = this;
        const tileHeight = 128;
        this.game.entities.forEach(function (entity) {
            if (entity.BB && that.BB.collide(entity.BB)) {
                // Y collisions
                if (that.velocity.y > 0) { // falling
                    if (((entity instanceof Tile) || (entity instanceof LittleBox)) // landing
                        && (that.lastBB.bottom) >= entity.BB.top) { // was above last tick
                        that.y = entity.BB.top - tileHeight;
                        that.velocity.y = 0; // Stop vertical velocity

                        if (that.state === 3) that.state = 0; // set state to idle
                        that.updateBB();
                    }
                }
                else if (that.velocity.y < 0) { // jumping
                    if ((entity instanceof Tile) // hit ceiling
                        && (that.lastBB.top) >= entity.BB.bottom) { // was below last tick
                        that.y = entity.BB.bottom;
                        that.velocity.y = 0; // Stop vertical velocity
                    }
                }
            }
        });
        this.game.entities.forEach(function (entity) {
            if (entity.BB && that.BB.collide(entity.BB)) {
                // X Collisions
                // Handle left movement 
                if(that.velocity.x < 0) { // moving left
                    if ((entity instanceof Tile) // hit left wall
                        && (that.lastBB.left) >= entity.BB.right) { // was to the right of the wall
                        that.x = entity.BB.right - 48; // Adjust position to prevent overlap
                        that.velocity.x = 0; // Stop horizontal velocity
                    }
                } 
                // Handle right movement 
                else if(that.velocity.x > 0) { // moving right
                    if ((entity instanceof Tile) // hit right wall
                        && (that.lastBB.right) <= entity.BB.left) { // was to the left of the wall
                        that.x = entity.BB.left - 80; // Adjust position to prevent overlap
                        that.velocity.x = 0; // Stop horizontal velocity
                    }
                }

                // Check if entity is a box
                if ((entity instanceof LittleBox) && that.lastBB.bottom > entity.BB.top) {
                    // Box's left is colliding with guy's right
                    if (that.lastBB.right <= entity.BB.left) {
                        // Box should move to the right (set its x to guy's right?)
                        entity.x = that.BB.right;
                    }
                    // Box's right is colliding with guy's left
                    else if (that.lastBB.left >= entity.BB.right) {
                        // Box should move to the left (set its x to guy's left - width of box?)
                        entity.x = that.BB.left - 32;
                    }
                }

                if ((entity instanceof KillBox)) {
                    that.x = that.startX;
                    that.y = that.startY;
                }
            }
        });
        this.updateBB();
    }

    draw(ctx) {
        if (this.dead) {
            this.animations[4][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        } else {
            console.log(this.animations[this.state][this.facing]);
            this.animations[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
            if(this.game.debug === true) {
                ctx.strokeStyle = "red"; // Box color
                ctx.lineWidth = 2; // Line thickness
                ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);

                // DEBUG: Display Position and Velocity
                ctx.fillStyle = "yellow"; // Text color
                ctx.font = "14px Arial"; // Font size & style
                ctx.fillText(`Xpos: ${this.x}, Ypos: ${this.y}`, this.BB.x, this.BB.y - 10);
                ctx.fillText(`VelocityX: ${Math.round(this.velocity.x)}, VelocityY: ${Math.round(this.velocity.y)}`, this.BB.x, this.BB.y - 25);
            }
        }
    }
}