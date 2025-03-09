class SceneManager {
    constructor(game) {
        this.game = game;
        this.guy = new Guy(this.game, -32, 608);
        this.level = 0;
        this.puzzle = 0;
        this.reality = 0;
        this.lastLevel = 0; // Change this variable everytime a new level has been made (NEEDS TO BE CHANGED TO 2)!!!!!
        this.lastPuzzle = 3; // There are 3 puzzles per level
        this.canvasHeight = this.game.ctx.canvas.height;

        this.levelEntities = [];
        this.loadAllLevels();

        this.loadLevel();

        this.game.ctx.canvas.addEventListener("keydown", event => {
            this.game.keys[event.key] = true
            this.active = true;
            switch (event.code) {
                case "ShiftLeft":
                    if (this.puzzle != 4) {
                        if (this.reality == 0) {
                            this.reality = 1;
                        } else {
                            this.reality = 0;
                        }

                        this.loadLevel();
                        break;
                    }
                case "KeyE":
                    if (this.guy.endingReady) {
                        console.log(this.guy.endingNum);

                        this.puzzle = 4;
                        this.reality = this.guy.endingNum;

                        this.loadLevel();
                        this.guy.die();
                    }
                    else if (this.guy.portalReady) {
                        // Leaving vacation
                        if (this.puzzle == 4) {
                            this.level = 0;
                            this.puzzle = 3;
                            this.reality = 0;
                        }

                        // Last level and last puzzle (win screen)
                        else if(this.level == this.lastLevel && this.puzzle == this.lastPuzzle) {
                            this.level = 0;
                            this.puzzle = 3;
                            this.reality = 0;
                            this.game.score += 1000;
                        }

                        // last puzzle -> next puzzle (change 2 ->  lastPuzzle when all levels implemented)
                        else if(this.puzzle == 2) {
                            this.level += 1;
                            this.puzzle = 0;
                            this.reality = 0;
                            this.game.score += 1000;
                        }

                        // Increment puzzle (this can just be an else when all levels implemented)
                        else if(this.puzzle < this.lastPuzzle) {
                            this.puzzle += 1;
                            this.reality = 0;
                            this.game.score += 500;
                        }

                        this.loadLevel();
                        this.guy.numOfCoins = 0;
                        this.guy.die();
                    }
                    break;
                case "KeyR": // Reset
                    this.levelEntities = [];

                    this.reality = 0;
                    this.loadAllLevels();
                    this.loadLevel();

                    this.game.score -= this.guy.numOfCoins * 100;
                    this.guy.numOfCoins = 0;
                    this.guy.die();
                    break;
            }
        });
    }

    loadLevel() {
        this.clearEntities();

        for (let entity of this.levelEntities[this.level][this.puzzle][this.reality]) {
            console.log(this.reality);
            this.game.addEntity(entity);
            if (entity instanceof World) {
                console.log(entity.reality);
            }
        }
    }

    clearEntities() {
        this.game.entities = [];
        this.game.addEntity(this.guy);
    }

    loadAllLevels() {
        for (let i = 0; i < 3; i++) { // three levels
            this.levelEntities.push([]);
            for (let j = 0; j < 5; j++) {
                // three puzzles + one winning level ([0][3][0]) + four vacations ([0][4][0-3])
                this.levelEntities[i].push([]);
                for (let k = 0; k < 4; k++) { // two realities
                    this.levelEntities[i][j].push([]);
                }
            }
        }

        // Push Level Entities
        this.push00();
        this.push01();
        this.push02();
        this.push10();
        this.push20();
        this.pushWin();
        this.pushVacations();
    }
    // Level 0 Puzzle 0
    push00(){
        // Displaying current level and puzzle
        this.levelEntities[0][0][0].push(new Widget(this.game, 1, 1));
        // Reality 0
        // Floor Tiles
        this.levelEntities[0][0][0].push(new Tile(this.game, 0, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][0].push(new Tile(this.game, 64, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][0].push(new Tile(this.game, 128, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][0].push(new Tile(this.game, 192, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][0].push(new Tile(this.game, 256, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][0].push(new Tile(this.game, 320, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][0].push(new Tile(this.game, 384, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][0].push(new Tile(this.game, 448, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][0].push(new Tile(this.game, 512, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][0].push(new Tile(this.game, 576, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][0].push(new Tile(this.game, 640, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][0].push(new Tile(this.game, 704, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][0].push(new Tile(this.game, 768, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][0].push(new Tile(this.game, 832, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][0].push(new Tile(this.game, 896, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][0].push(new Tile(this.game, 960, 736, "CITY2_TILE1"));
        // Entities
        this.levelEntities[0][0][0].push(new Grate(this.game, 70, 552, "blue"));      // Bottom Grate
        this.levelEntities[0][0][0].push(new Waterfall(this.game, 70, 560, "blue"));
        this.levelEntities[0][0][0].push(new Waterfall(this.game, 70, 584, "blue"));
        this.levelEntities[0][0][0].push(new Waterfall(this.game, 70, 608, "blue"));
        this.levelEntities[0][0][0].push(new Waterfall(this.game, 70, 632, "blue"));
        this.levelEntities[0][0][0].push(new Waterfall(this.game, 70, 656, "blue"));
        this.levelEntities[0][0][0].push(new Waterfall(this.game, 70, 680, "blue"));
        this.levelEntities[0][0][0].push(new Waterfall(this.game, 70, 704, "blue"));
        this.levelEntities[0][0][0].push(new Tree(this.game, 128, 532, "BTree"));      // Left tree
        this.levelEntities[0][0][0].push(new KillBox(this.game, 195, 560, 16, 180));
        this.levelEntities[0][0][0].push(new Tree(this.game, 700, 532, "BTree"));      // Right Tree
        this.levelEntities[0][0][0].push(new KillBox(this.game, 767, 592, 16, 180));
        this.levelEntities[0][0][0].push(new Coin(this.game, 350, 690));

        this.levelEntities[0][0][0].push(new Portal(this.game, 905, 650));
        this.levelEntities[0][0][0].push(new LeftBoundary(this.game, -10, 0, 10, this.canvasHeight));
        this.levelEntities[0][0][0].push(new RightBoundary(this.game, 1024, 0, 10, this.canvasHeight));
        this.levelEntities[0][0][0].push(new World(this.game, 0, 0, 0, 0));

        // Reality 1
        // Displaying current level and puzzle
        this.levelEntities[0][0][1].push(new Widget(this.game, 1, 1));

        this.levelEntities[0][0][1].push(new Tile(this.game, 0, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][1].push(new Tile(this.game, 64, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][1].push(new Tile(this.game, 128, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][1].push(new Tile(this.game, 192, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][1].push(new Tile(this.game, 256, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][1].push(new Tile(this.game, 320, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][1].push(new Tile(this.game, 384, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][1].push(new Tile(this.game, 448, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][1].push(new Tile(this.game, 512, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][1].push(new Tile(this.game, 576, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][1].push(new Tile(this.game, 640, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][1].push(new Tile(this.game, 704, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][1].push(new Tile(this.game, 768, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][1].push(new Tile(this.game, 832, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][1].push(new Tile(this.game, 896, 736, "CITY2_TILE1"));
        this.levelEntities[0][0][1].push(new Tile(this.game, 960, 736, "CITY2_TILE1"));
        // Entities
        this.levelEntities[0][0][1].push(new Grate(this.game, 471, 540, "green"));      // Bottom Grate
        this.levelEntities[0][0][1].push(new Waterfall(this.game, 471, 560, "green"));
        this.levelEntities[0][0][1].push(new Waterfall(this.game, 471, 584, "green"));
        this.levelEntities[0][0][1].push(new Waterfall(this.game, 471, 608, "green"));
        this.levelEntities[0][0][1].push(new Waterfall(this.game, 471, 632, "green"));
        this.levelEntities[0][0][1].push(new Waterfall(this.game, 471, 656, "green"));
        this.levelEntities[0][0][1].push(new Waterfall(this.game, 471, 680, "green"));
        this.levelEntities[0][0][1].push(new Waterfall(this.game, 471, 704, "green"));
        this.levelEntities[0][0][1].push(new Coin(this.game, 750, 690));

        this.levelEntities[0][0][1].push(new Portal(this.game, 905, 650));
        this.levelEntities[0][0][1].push(new LeftBoundary(this.game, -10, 0, 10, this.canvasHeight));
        this.levelEntities[0][0][1].push(new RightBoundary(this.game, 1024, 0, 10, this.canvasHeight));
        this.levelEntities[0][0][1].push(new World(this.game, 0, 0, 0, 1));
    }

    // Level 0 Puzzle 1
    push01(){
        const KILLW = 36;
        const KILLH = 24;
        // Reality 0
        // Displaying current level and puzzle
        this.levelEntities[0][1][0].push(new Widget(this.game, 1, 2));
        // Floor tiles
        this.levelEntities[0][1][0].push(new Tile(this.game, 0, 736, "CITY2_TILE1"));
        // Kill Tiles
        this.levelEntities[0][1][0].push(new KillBox(this.game, 64, 896, 1064, 16)); // under the map
        // Alternating platforms (665 good start) (256 seperator)
        this.levelEntities[0][1][0].push(new Tile(this.game, 448, 633, "CITY2_TILE1"));
        this.levelEntities[0][1][0].push(new KillBox(this.game, 448 + KILLW, 633 + KILLH, KILLH, 8));
        this.levelEntities[0][1][0].push(new Tile(this.game, 896, 585, "CITY2_TILE1"));
        this.levelEntities[0][1][0].push(new KillBox(this.game, 896 + KILLW, 585 + KILLH, KILLH, 8));
        // Background + Portal
        this.levelEntities[0][1][0].push(new Portal(this.game, 896, 505));
        this.levelEntities[0][1][0].push(new LeftBoundary(this.game, -10, 0, 10, this.canvasHeight));
        this.levelEntities[0][1][0].push(new RightBoundary(this.game, 1024, 0, 10, this.canvasHeight));
        this.levelEntities[0][1][0].push(new World(this.game, 0, 0, 0, 0));

        // Reality 1
        // Displaying current level and puzzle
        this.levelEntities[0][1][1].push(new Widget(this.game, 1, 2));
        // Floor
        this.levelEntities[0][1][1].push(new Tile(this.game, 0, 736, "CITY2_TILE1"));
        // Kill Tiles
        this.levelEntities[0][1][1].push(new KillBox(this.game, 64, 896, 1064, 16)); // under the map

        // Alternating platforms (665 good start)
        this.levelEntities[0][1][1].push(new Tile(this.game, 192, 665, "CITY2_TILE1"));
        this.levelEntities[0][1][1].push(new KillBox(this.game, 192 + KILLW, 665 + KILLH, KILLH, 8));
        this.levelEntities[0][1][1].push(new Tile(this.game, 704, 665, "CITY2_TILE1"));
        this.levelEntities[0][1][1].push(new KillBox(this.game, 704 + KILLW, 665 + KILLH, KILLH, 8));
        this.levelEntities[0][1][1].push(new Tile(this.game, 720, 500, "CITY2_TILE1"));
        this.levelEntities[0][1][1].push(new KillBox(this.game, 720 + KILLW, 500 + KILLH, KILLH, 8));
        // Entities
        this.levelEntities[0][1][1].push(new Coin(this.game, 745, 469));
        // Background + Portal
        this.levelEntities[0][1][1].push(new Portal(this.game, 896, 505));
        this.levelEntities[0][1][1].push(new LeftBoundary(this.game, -10, 0, 10, this.canvasHeight));
        this.levelEntities[0][1][1].push(new RightBoundary(this.game, 1024, 0, 10, this.canvasHeight));
        this.levelEntities[0][1][1].push(new World(this.game, 0, 0, 0, 1));
    }

    // Level 0 Puzzle 2
    push02(){
        // Reality 0
        // Displaying current level and puzzle
        this.levelEntities[0][2][0].push(new Widget(this.game, 1, 3));
        // Floor Tiles
        const KILLW = 30;
        const KILLH = 14;
        this.levelEntities[0][2][0].push(new Tile(this.game, 0, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new Tile(this.game, 64, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new Tile(this.game, 128, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new Tile(this.game, 192, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new Tile(this.game, 256, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new Tile(this.game, 320, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new Tile(this.game, 384, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new Tile(this.game, 448, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new Tile(this.game, 512, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new Tile(this.game, 576, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new Tile(this.game, 640, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new Tile(this.game, 704, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new Tile(this.game, 768, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new Tile(this.game, 832, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new Tile(this.game, 896, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new Tile(this.game, 960, 736, "CITY2_TILE1"));
        // Entities
        this.levelEntities[0][2][0].push(new Tree(this.game, 200, 532, "BTree"));
        this.levelEntities[0][2][0].push(new KillBox(this.game, 270, 530 + KILLH, 16, 180));
        this.levelEntities[0][2][0].push(new Grate(this.game, 800, 350, "blue"));
        this.levelEntities[0][2][0].push(new Waterfall(this.game, 800, 358, "blue"));
        this.levelEntities[0][2][0].push(new Waterfall(this.game, 800, 382, "blue"));
        this.levelEntities[0][2][0].push(new Waterfall(this.game, 800, 406, "blue"));
        this.levelEntities[0][2][0].push(new Waterfall(this.game, 800, 430, "blue"));
        this.levelEntities[0][2][0].push(new Waterfall(this.game, 800, 454, "blue"));
        this.levelEntities[0][2][0].push(new Waterfall(this.game, 800, 478, "blue"));
        this.levelEntities[0][2][0].push(new Waterfall(this.game, 800, 502, "blue"));
        this.levelEntities[0][2][0].push(new Coin(this.game, 980, 520));
        this.levelEntities[0][2][0].push(new Coin(this.game, 677, 170));
        // Raised Platforms
        this.levelEntities[0][2][0].push(new Tile(this.game, 576, 550, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new Tile(this.game, 640, 550, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new Tile(this.game, 704, 550, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new Tile(this.game, 768, 550, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new Tile(this.game, 832, 550, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new KillBox(this.game, 832 + KILLW, 550 + KILLH, KILLH, KILLH));
        this.levelEntities[0][2][0].push(new Tile(this.game, 896, 550, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new KillBox(this.game, 896 + KILLW, 550 + KILLH, KILLH, KILLH));
        this.levelEntities[0][2][0].push(new Tile(this.game, 960, 550, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new KillBox(this.game, 960 + KILLW, 550 + KILLH, KILLH, KILLH));
        // Jumping Platforms
        this.levelEntities[0][2][0].push(new Tile(this.game, 550, 400, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new KillBox(this.game, 550 + KILLW, 400 + KILLH, KILLH, KILLH));
        this.levelEntities[0][2][0].push(new Tile(this.game, 250, 250, "CITY2_TILE1"));
        this.levelEntities[0][2][0].push(new KillBox(this.game, 250 + KILLW, 250 + KILLH, KILLH, KILLH));
        this.levelEntities[0][2][0].push(new Tile(this.game, 650, 200, "CITY2_TILE1"));                     // Coin Platform
        this.levelEntities[0][2][0].push(new KillBox(this.game, 650 + KILLW, 200 + KILLH, KILLH, KILLH));
        // Background + Portal + Killbox test
        this.levelEntities[0][2][0].push(new Portal(this.game, -16, 115));
        this.levelEntities[0][2][0].push(new LeftBoundary(this.game, -10, 0, 10, this.canvasHeight));
        this.levelEntities[0][2][0].push(new RightBoundary(this.game, 1024, 0, 10, this.canvasHeight));
        this.levelEntities[0][2][0].push(new World(this.game, 0, 0, 0, 0));

        // Reality 1
        // Displaying current level and puzzle
        this.levelEntities[0][2][1].push(new Widget(this.game, 1, 3));
        // Floor Tiles
        this.levelEntities[0][2][1].push(new Tile(this.game, 0, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][1].push(new Tile(this.game, 64, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][1].push(new Tile(this.game, 128, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][1].push(new Tile(this.game, 192, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][1].push(new Tile(this.game, 256, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][1].push(new Tile(this.game, 320, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][1].push(new Tile(this.game, 384, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][1].push(new Tile(this.game, 448, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][1].push(new Tile(this.game, 512, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][1].push(new Tile(this.game, 576, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][1].push(new Tile(this.game, 640, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][1].push(new Tile(this.game, 704, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][1].push(new Tile(this.game, 768, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][1].push(new Tile(this.game, 832, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][1].push(new Tile(this.game, 896, 736, "CITY2_TILE1"));
        this.levelEntities[0][2][1].push(new Tile(this.game, 960, 736, "CITY2_TILE1"));
        // Entities
        this.levelEntities[0][2][1].push(new Box(this.game, 700, 680, 3.5));
        this.levelEntities[0][2][1].push(new Grate(this.game, 700, 350, "green"));      // Top Grate
        this.levelEntities[0][2][1].push(new Waterfall(this.game, 700, 358, "green"));
        this.levelEntities[0][2][1].push(new Waterfall(this.game, 700, 382, "green"));
        this.levelEntities[0][2][1].push(new Waterfall(this.game, 700, 406, "green"));
        this.levelEntities[0][2][1].push(new Waterfall(this.game, 700, 430, "green"));
        this.levelEntities[0][2][1].push(new Waterfall(this.game, 700, 454, "green"));
        this.levelEntities[0][2][1].push(new Waterfall(this.game, 700, 478, "green"));
        this.levelEntities[0][2][1].push(new Waterfall(this.game, 700, 502, "green"));
        this.levelEntities[0][2][1].push(new Grate(this.game, 580, 552, "green"));      // Bottom Grate
        this.levelEntities[0][2][1].push(new Waterfall(this.game, 580, 560, "green"));
        this.levelEntities[0][2][1].push(new Waterfall(this.game, 580, 584, "green"));
        this.levelEntities[0][2][1].push(new Waterfall(this.game, 580, 608, "green"));
        this.levelEntities[0][2][1].push(new Waterfall(this.game, 580, 632, "green"));
        this.levelEntities[0][2][1].push(new Waterfall(this.game, 580, 656, "green"));
        this.levelEntities[0][2][1].push(new Waterfall(this.game, 580, 680, "green"));
        this.levelEntities[0][2][1].push(new Waterfall(this.game, 580, 704, "green"));
        // Raised Platforms
        this.levelEntities[0][2][1].push(new Tile(this.game, 576, 550, "CITY2_TILE1"));
        this.levelEntities[0][2][1].push(new Tile(this.game, 640, 550, "CITY2_TILE1"));
        this.levelEntities[0][2][1].push(new Tile(this.game, 704, 550, "CITY2_TILE1"));
        this.levelEntities[0][2][1].push(new Tile(this.game, 768, 550, "CITY2_TILE1"));
        // Jumping Platforms
        this.levelEntities[0][2][1].push(new Tile(this.game, 0, 200, "CITY2_TILE1")); // Portal platform
        this.levelEntities[0][2][1].push(new KillBox(this.game, KILLW, 200 + KILLH, KILLH, KILLH));
        this.levelEntities[0][2][1].push(new Tile(this.game, 300, 500, "CITY2_TILE1"));
        this.levelEntities[0][2][1].push(new KillBox(this.game, 300 + KILLW, 500 + KILLH, KILLH, KILLH));
        this.levelEntities[0][2][1].push(new Tile(this.game, 400, 290, "CITY2_TILE1"));
        this.levelEntities[0][2][1].push(new KillBox(this.game, 400 + KILLW, 290 + KILLH, KILLH, KILLH));
        // Background + Portal
        this.levelEntities[0][2][1].push(new Portal(this.game, -16, 115));
        this.levelEntities[0][2][1].push(new LeftBoundary(this.game, -10, 0, 10, this.canvasHeight));
        this.levelEntities[0][2][1].push(new RightBoundary(this.game, 1024, 0, 10, this.canvasHeight));
        this.levelEntities[0][2][1].push(new World(this.game, 0, 0, 0, 1));
    }

    pushWin() {
        // Reality 0
        // Floor tiles
        this.levelEntities[0][3][0].push(new Tile(this.game, 0, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][0].push(new Tile(this.game, 64, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][0].push(new Tile(this.game, 128, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][0].push(new Tile(this.game, 192, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][0].push(new Tile(this.game, 256, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][0].push(new Tile(this.game, 320, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][0].push(new Tile(this.game, 384, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][0].push(new Tile(this.game, 448, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][0].push(new Tile(this.game, 512, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][0].push(new Tile(this.game, 576, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][0].push(new Tile(this.game, 640, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][0].push(new Tile(this.game, 704, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][0].push(new Tile(this.game, 768, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][0].push(new Tile(this.game, 832, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][0].push(new Tile(this.game, 896, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][0].push(new Tile(this.game, 960, 736, "CITY2_TILE1"));
        // Entities
        this.levelEntities[0][3][0].push(new Coin(this.game, 130, 690));
        this.levelEntities[0][3][0].push(new Coin(this.game, 514, 690));
        this.levelEntities[0][3][0].push(new Coin(this.game, 900, 690));
        this.levelEntities[0][3][0].push(new EndingPortal(this.game, 200, 650, 0))
        this.levelEntities[0][3][0].push(new EndingPortal(this.game, 385, 650, 1))
        this.levelEntities[0][3][0].push(new EndingPortal(this.game, 570, 650, 2))
        this.levelEntities[0][3][0].push(new EndingPortal(this.game, 755, 650, 3))
        this.levelEntities[0][3][0].push(new EndingWidget(this.game));
        // World + Boundaries
        this.levelEntities[0][3][0].push(new LeftBoundary(this.game, -10, 0, 10, this.canvasHeight));
        this.levelEntities[0][3][0].push(new RightBoundary(this.game, 1024, 0, 10, this.canvasHeight));
        this.levelEntities[0][3][0].push(new World(this.game, 0, 0, 3, 0));

        // Reality 1
        // Floor tiles
        this.levelEntities[0][3][1].push(new Tile(this.game, 0, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][1].push(new Tile(this.game, 64, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][1].push(new Tile(this.game, 128, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][1].push(new Tile(this.game, 192, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][1].push(new Tile(this.game, 256, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][1].push(new Tile(this.game, 320, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][1].push(new Tile(this.game, 384, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][1].push(new Tile(this.game, 448, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][1].push(new Tile(this.game, 512, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][1].push(new Tile(this.game, 576, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][1].push(new Tile(this.game, 640, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][1].push(new Tile(this.game, 704, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][1].push(new Tile(this.game, 768, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][1].push(new Tile(this.game, 832, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][1].push(new Tile(this.game, 896, 736, "CITY2_TILE1"));
        this.levelEntities[0][3][1].push(new Tile(this.game, 960, 736, "CITY2_TILE1"));
        // Entities
        this.levelEntities[0][3][1].push(new Coin(this.game, 330, 690));
        this.levelEntities[0][3][1].push(new Coin(this.game, 698, 690));
        this.levelEntities[0][3][1].push(new EndingPortal(this.game, 200, 650, 0))
        this.levelEntities[0][3][1].push(new EndingPortal(this.game, 385, 650, 1))
        this.levelEntities[0][3][1].push(new EndingPortal(this.game, 570, 650, 2))
        this.levelEntities[0][3][1].push(new EndingPortal(this.game, 755, 650, 3))
        this.levelEntities[0][3][1].push(new EndingWidget(this.game));
        // World + Boundaries
        this.levelEntities[0][3][1].push(new LeftBoundary(this.game, -10, 0, 10, this.canvasHeight));
        this.levelEntities[0][3][1].push(new RightBoundary(this.game, 1024, 0, 10, this.canvasHeight));
        this.levelEntities[0][3][1].push(new World(this.game, 0, 0, 3, 1));
    }

    //////////////////////////

    // Level 1 Puzzle 0
    push10(){
        this.levelEntities[1][0][0].push(new Widget(this.game, 2, 1));
        // Floor tiles
        this.levelEntities[1][0][0].push(new Tile(this.game, 0, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][0].push(new Tile(this.game, 64, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][0].push(new Tile(this.game, 128, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][0].push(new Tile(this.game, 192, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][0].push(new Tile(this.game, 256, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][0].push(new Tile(this.game, 320, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][0].push(new Tile(this.game, 384, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][0].push(new Tile(this.game, 448, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][0].push(new Tile(this.game, 512, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][0].push(new Tile(this.game, 576, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][0].push(new Tile(this.game, 640, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][0].push(new Tile(this.game, 704, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][0].push(new Tile(this.game, 768, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][0].push(new Tile(this.game, 832, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][0].push(new Tile(this.game, 896, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][0].push(new Tile(this.game, 960, 736, "CITY2_TILE1"));
        // Entities
        const KILLW = 24;
        const KILLH = 12;
        this.levelEntities[1][0][0].push(new Grate(this.game, 200, 600, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 200, 608, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 200, 632, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 200, 656, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 200, 680, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 200, 704, "green"));
        this.levelEntities[1][0][0].push(new Grate(this.game, 350, 600, "blue"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 350, 608, "blue"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 350, 632, "blue"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 350, 656, "blue"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 350, 680, "blue"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 350, 704, "blue"));
        this.levelEntities[1][0][0].push(new Grate(this.game, 500, 160, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 500, 168, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 500, 192, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 500, 216, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 500, 240, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 500, 264, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 500, 288, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 500, 312, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 500, 336, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 500, 360, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 500, 384, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 500, 408, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 500, 432, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 500, 456, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 500, 480, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 500, 504, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 500, 528, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 500, 552, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 500, 576, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 500, 600, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 500, 624, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 500, 648, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 500, 672, "green"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 500, 696, "green"));
        this.levelEntities[1][0][0].push(new Grate(this.game, 650, 600, "blue"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 650, 608, "blue"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 650, 632, "blue"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 650, 656, "blue"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 650, 680, "blue"));
        this.levelEntities[1][0][0].push(new Waterfall(this.game, 650, 704, "blue"));
        this.levelEntities[1][0][0].push(new KillBox(this.game, 64 + KILLW, 600 + KILLH, KILLH, KILLH));
        this.levelEntities[1][0][0].push(new Tile(this.game, 64, 600, "CITY2_TILE1"));
        this.levelEntities[1][0][0].push(new KillBox(this.game, 128 + KILLW, 600 + KILLH, KILLH, KILLH));
        this.levelEntities[1][0][0].push(new Tile(this.game, 128, 600, "CITY2_TILE1"));
        this.levelEntities[1][0][0].push(new KillBox(this.game, 420 + KILLW, 600 + KILLH, KILLH, KILLH));
        this.levelEntities[1][0][0].push(new Tile(this.game, 420, 600, "CITY2_TILE1"));
        this.levelEntities[1][0][0].push(new KillBox(this.game, 192 + KILLW, 400 + KILLH, KILLH, KILLH));
        this.levelEntities[1][0][0].push(new Tile(this.game, 192, 400, "CITY2_TILE1"));
        this.levelEntities[1][0][0].push(new KillBox(this.game, 570 + KILLW, 360 + KILLH, KILLH, KILLH));
        this.levelEntities[1][0][0].push(new Tile(this.game, 570, 360, "CITY2_TILE1"));
        this.levelEntities[1][0][0].push(new KillBox(this.game, 910 + KILLW, 260 + KILLH, KILLH, KILLH));
        this.levelEntities[1][0][0].push(new Tile(this.game, 910, 260, "CITY2_TILE1"));
        // World + Boundaries
        this.levelEntities[1][0][0].push(new Portal(this.game, 900, 175));
        this.levelEntities[1][0][0].push(new LeftBoundary(this.game, -10, 0, 10, this.canvasHeight));
        this.levelEntities[1][0][0].push(new RightBoundary(this.game, 1024, 0, 10, this.canvasHeight));
        this.levelEntities[1][0][0].push(new World(this.game, 0, 0, 1, 0));

        this.levelEntities[1][0][1].push(new Widget(this.game, 2, 1));
        // Floor tiles
        this.levelEntities[1][0][1].push(new Tile(this.game, 0, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][1].push(new Tile(this.game, 64, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][1].push(new Tile(this.game, 128, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][1].push(new Tile(this.game, 192, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][1].push(new Tile(this.game, 256, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][1].push(new Tile(this.game, 320, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][1].push(new Tile(this.game, 384, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][1].push(new Tile(this.game, 448, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][1].push(new Tile(this.game, 512, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][1].push(new Tile(this.game, 576, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][1].push(new Tile(this.game, 640, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][1].push(new Tile(this.game, 704, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][1].push(new Tile(this.game, 768, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][1].push(new Tile(this.game, 832, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][1].push(new Tile(this.game, 896, 736, "CITY2_TILE1"));
        this.levelEntities[1][0][1].push(new Tile(this.game, 960, 736, "CITY2_TILE1"));
        // Entities
        this.levelEntities[1][0][1].push(new Grate(this.game, 200, 600, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 200, 608, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 200, 632, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 200, 656, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 200, 680, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 200, 704, "blue"));
        this.levelEntities[1][0][1].push(new Grate(this.game, 350, 600, "green"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 350, 608, "green"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 350, 632, "green"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 350, 656, "green"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 350, 680, "green"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 350, 704, "green"));
        this.levelEntities[1][0][1].push(new Grate(this.game, 500, 160, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 500, 168, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 500, 192, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 500, 216, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 500, 240, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 500, 264, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 500, 288, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 500, 312, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 500, 336, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 500, 360, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 500, 384, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 500, 408, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 500, 432, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 500, 456, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 500, 480, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 500, 504, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 500, 528, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 500, 552, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 500, 576, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 500, 600, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 500, 624, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 500, 648, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 500, 672, "blue"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 500, 696, "blue"));
        this.levelEntities[1][0][1].push(new Grate(this.game, 650, 600, "green"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 650, 608, "green"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 650, 632, "green"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 650, 656, "green"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 650, 680, "green"));
        this.levelEntities[1][0][1].push(new Waterfall(this.game, 650, 704, "green"));
        this.levelEntities[1][0][1].push(new KillBox(this.game, 720 + KILLW, 600 + KILLH, KILLH, KILLH));
        this.levelEntities[1][0][1].push(new Tile(this.game, 720, 600, "CITY2_TILE1"));
        this.levelEntities[1][0][1].push(new KillBox(this.game, 784 + KILLW, 600 + KILLH, KILLH, KILLH));
        this.levelEntities[1][0][1].push(new Tile(this.game, 784, 600, "CITY2_TILE1"));
        this.levelEntities[1][0][1].push(new KillBox(this.game, 900 + KILLW, 706 + KILLH, KILLH, KILLH));
        this.levelEntities[1][0][1].push(new Tile(this.game, 900, 706, "CITY2_TILE1"));
        this.levelEntities[1][0][1].push(new KillBox(this.game, KILLW, 500 + KILLH, KILLH, KILLH));
        this.levelEntities[1][0][1].push(new Tile(this.game, 0, 500, "CITY2_TILE1"));
        this.levelEntities[1][0][1].push(new KillBox(this.game, 910 + KILLW, 420 + KILLH, KILLH, KILLH));
        this.levelEntities[1][0][1].push(new Tile(this.game, 910, 420, "CITY2_TILE1"));
        this.levelEntities[1][0][1].push(new Coin(this.game, 936, 385));
        this.levelEntities[1][0][1].push(new KillBox(this.game, 910 + KILLW, 260 + KILLH, KILLH, KILLH));
        this.levelEntities[1][0][1].push(new Tile(this.game, 910, 260, "CITY2_TILE1"));
        // World + Boundaries
        this.levelEntities[1][0][1].push(new Portal(this.game, 900, 175));
        this.levelEntities[1][0][1].push(new LeftBoundary(this.game, -10, 0, 10, this.canvasHeight));
        this.levelEntities[1][0][1].push(new RightBoundary(this.game, 1024, 0, 10, this.canvasHeight));
        this.levelEntities[1][0][1].push(new World(this.game, 0, 0, 1, 1));
    }

    // Level 1 Puzzle 1
    push11(){

    }

    // Level 1 Puzzle 2
    push12(){

    }

    ///////////////////////////////

    // Level 2 Puzzle 0
    push20(){
        // Reality #1
        this.levelEntities[2][0][0].push(new Tile(this.game, 0, 758, "CITY2_TILE1", true));
        this.levelEntities[2][0][0].push(new Tile(this.game, 64, 758, "CITY2_TILE1",true));
        this.levelEntities[2][0][0].push(new Tile(this.game, 128, 758, "CITY2_TILE1", true));
        this.levelEntities[2][0][0].push(new Tile(this.game, 192, 758, "CITY2_TILE1", true));
        this.levelEntities[2][0][0].push(new Tile(this.game, 256, 758, "CITY2_TILE1", true));
        this.levelEntities[2][0][0].push(new Tile(this.game, 320, 758, "CITY2_TILE1", true));
        this.levelEntities[2][0][0].push(new Tile(this.game, 809, 316, "CITY2_TILE1", true));
        this.levelEntities[2][0][0].push(new Tile(this.game, 873, 316, "CITY2_TILE1", true));
        this.levelEntities[2][0][0].push(new Tile(this.game, 937, 316, "CITY2_TILE1", true));
        this.levelEntities[2][0][0].push(new Tile(this.game, 1001, 316, "CITY2_TILE1", true));
        this.levelEntities[2][0][0].push(new WindBox(this.game, 640, 600,38 , 64, "Right"));
        this.levelEntities[2][0][0].push(new WindBox(this.game, 748, 280,38 , 64, "Right"));
        this.levelEntities[2][0][0].push(new World(this.game, 0, 0, 2, 0));

        // Reality #2
        this.levelEntities[2][0][1].push(new Tile(this.game, 0, 758, "CITY2_TILE1", true));
        this.levelEntities[2][0][1].push(new Tile(this.game, 64, 758, "CITY2_TILE1",true));
        this.levelEntities[2][0][1].push(new Tile(this.game, 128, 758, "CITY2_TILE1", true));
        this.levelEntities[2][0][1].push(new Tile(this.game, 192, 758, "CITY2_TILE1", true));
        this.levelEntities[2][0][1].push(new Tile(this.game, 256, 758, "CITY2_TILE1", true));
        this.levelEntities[2][0][1].push(new Tile(this.game, 320, 758, "CITY2_TILE1", true));
        this.levelEntities[2][0][1].push(new WindBox(this.game, 640, 600,38 , 64, "Right"));
        this.levelEntities[2][0][1].push(new WindBox(this.game, 192, 400,38 , 64, "Right"));
        this.levelEntities[2][0][1].push(new World(this.game, 0, 0, 2, 1));
    }

    // Level 2 Puzzle 1
    push21(){

    }

    // Level 2 Puzzle 2
    push22(){

    }

    pushVacations(){
        // Floor Tiles (Beach)
        this.levelEntities[0][4][0].push(new Tile(this.game, 0, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][0].push(new Tile(this.game, 64, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][0].push(new Tile(this.game, 128, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][0].push(new Tile(this.game, 192, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][0].push(new Tile(this.game, 256, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][0].push(new Tile(this.game, 320, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][0].push(new Tile(this.game, 384, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][0].push(new Tile(this.game, 448, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][0].push(new Tile(this.game, 512, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][0].push(new Tile(this.game, 576, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][0].push(new Tile(this.game, 640, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][0].push(new Tile(this.game, 704, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][0].push(new Tile(this.game, 768, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][0].push(new Tile(this.game, 832, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][0].push(new Tile(this.game, 896, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][0].push(new Tile(this.game, 960, 736, "CITY2_TILE1"));

        // World + Boundaries (Beach)
        this.levelEntities[0][4][0].push(new Portal(this.game, 490, 650));
        this.levelEntities[0][4][0].push(new LeftBoundary(this.game, -10, 0, 10, this.canvasHeight));
        this.levelEntities[0][4][0].push(new RightBoundary(this.game, 1024, 0, 10, this.canvasHeight));
        this.levelEntities[0][4][0].push(new World(this.game, 0, 0, 4, 0));

        // Floor Tiles (Mountains)
        this.levelEntities[0][4][1].push(new Tile(this.game, 0, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][1].push(new Tile(this.game, 64, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][1].push(new Tile(this.game, 128, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][1].push(new Tile(this.game, 192, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][1].push(new Tile(this.game, 256, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][1].push(new Tile(this.game, 320, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][1].push(new Tile(this.game, 384, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][1].push(new Tile(this.game, 448, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][1].push(new Tile(this.game, 512, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][1].push(new Tile(this.game, 576, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][1].push(new Tile(this.game, 640, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][1].push(new Tile(this.game, 704, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][1].push(new Tile(this.game, 768, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][1].push(new Tile(this.game, 832, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][1].push(new Tile(this.game, 896, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][1].push(new Tile(this.game, 960, 736, "CITY2_TILE1"));

        // World + Boundaries (Mountains)
        this.levelEntities[0][4][1].push(new Portal(this.game, 490, 650));
        this.levelEntities[0][4][1].push(new LeftBoundary(this.game, -10, 0, 10, this.canvasHeight));
        this.levelEntities[0][4][1].push(new RightBoundary(this.game, 1024, 0, 10, this.canvasHeight));
        this.levelEntities[0][4][1].push(new World(this.game, 0, 0, 4, 1));

        // Floor Tiles (Town)
        this.levelEntities[0][4][2].push(new Tile(this.game, 0, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][2].push(new Tile(this.game, 64, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][2].push(new Tile(this.game, 128, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][2].push(new Tile(this.game, 192, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][2].push(new Tile(this.game, 256, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][2].push(new Tile(this.game, 320, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][2].push(new Tile(this.game, 384, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][2].push(new Tile(this.game, 448, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][2].push(new Tile(this.game, 512, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][2].push(new Tile(this.game, 576, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][2].push(new Tile(this.game, 640, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][2].push(new Tile(this.game, 704, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][2].push(new Tile(this.game, 768, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][2].push(new Tile(this.game, 832, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][2].push(new Tile(this.game, 896, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][2].push(new Tile(this.game, 960, 736, "CITY2_TILE1"));

        // World + Boundaries (Town)
        this.levelEntities[0][4][2].push(new Portal(this.game, 490, 650));
        this.levelEntities[0][4][2].push(new LeftBoundary(this.game, -10, 0, 10, this.canvasHeight));
        this.levelEntities[0][4][2].push(new RightBoundary(this.game, 1024, 0, 10, this.canvasHeight));
        this.levelEntities[0][4][2].push(new World(this.game, 0, 0, 4, 2));

        // Floor Tiles (Tree)
        this.levelEntities[0][4][3].push(new Tile(this.game, 0, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][3].push(new Tile(this.game, 64, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][3].push(new Tile(this.game, 128, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][3].push(new Tile(this.game, 192, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][3].push(new Tile(this.game, 256, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][3].push(new Tile(this.game, 320, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][3].push(new Tile(this.game, 384, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][3].push(new Tile(this.game, 448, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][3].push(new Tile(this.game, 512, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][3].push(new Tile(this.game, 576, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][3].push(new Tile(this.game, 640, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][3].push(new Tile(this.game, 704, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][3].push(new Tile(this.game, 768, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][3].push(new Tile(this.game, 832, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][3].push(new Tile(this.game, 896, 736, "CITY2_TILE1"));
        this.levelEntities[0][4][3].push(new Tile(this.game, 960, 736, "CITY2_TILE1"));

        // World + Boundaries (Tree)
        this.levelEntities[0][4][3].push(new Portal(this.game, 490, 650));
        this.levelEntities[0][4][3].push(new LeftBoundary(this.game, -10, 0, 10, this.canvasHeight));
        this.levelEntities[0][4][3].push(new RightBoundary(this.game, 1024, 0, 10, this.canvasHeight));
        this.levelEntities[0][4][3].push(new World(this.game, 0, 0, 4, 3));
    }
}