class SceneManager {
    constructor(game) {
        this.game = game;
        this.guy = new Guy(this.game, -32, 608);
        this.level = 0;
        this.puzzle = 0;
        this.reality = 0;
        this.lastLevel = 0; // Change this variable everytime a new level has been made (NEEDS TO BE CHANGED TO 2)!!!!!
        this.lastPuzzle = 1; // There are 3 puzzles per level (NEEDS TO BE CHANGED TO 2)!!!!!
        this.canvasHeight = this.game.ctx.canvas.height;

        this.levelEntities = [];
        this.loadAllLevels();

        this.loadLevel();

        this.game.ctx.canvas.addEventListener("keydown", event => {
            this.game.keys[event.key] = true
            this.active = true;
            switch (event.code) {
                case "ShiftLeft":
                    if (this.reality == 0) {
                        this.reality = 1;
                    } else {
                        this.reality = 0;
                    }

                    this.loadLevel();
                    break;
                case "KeyE":
                    if (this.guy.portalReady) {
                        // Last level and last puzzle (win screen)
                        if(this.level == this.lastLevel && this.puzzle == this.lastPuzzle) {
                            this.level = 0;
                            this.puzzle = 3;
                            this.reality = 0;
                        }

                        // last puzzle -> next puzzle (change 2 ->  lastPuzzle when all levels implemented)
                        else if(this.puzzle == 3) {
                            this.level += 1;
                            this.puzzle = 0;
                            this.reality = 0;
                        }

                        // Increment puzzle (this can just be an else when all levels implemented)
                        else if(this.puzzle < this.lastPuzzle) {
                            this.puzzle += 1;
                            this.reality = 0;
                        }

                        this.loadLevel();
                        this.guy.die();
                        break;
                    }
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
            for (let j = 0; j < 4; j++) { // three puzzles + one winning level ([0][0][3])
                this.levelEntities[i].push([]);
                for (let k = 0; k < 2; k++) { // two realities
                    this.levelEntities[i][j].push([]);
                }
            }
        }

        // Push Level Entities
        this.push00();
        this.push01();
        this.push02();
        this.pushWin();
    }
    // Level 0 Puzzle 0
    push00(){
        // Reality 0
        // Displaying current level and puzzle
        this.levelEntities[0][0][0].push(new Widget(this.game, 1, 1));
        // Floor Tiles
        const KILLW = 30;
        const KILLH = 18;
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
        // Collision Test
        this.levelEntities[0][0][0].push(new Tile(this.game, 256, 704, "CITY2_TILE1"));
        this.levelEntities[0][0][0].push(new KillBox(this.game, 256 + KILLW, 704 + KILLH, KILLH, KILLH));
        // Box Test
        this.levelEntities[0][0][0].push(new LittleBox(this.game, 576, 576));
        // Jump Test
        this.levelEntities[0][0][0].push(new Tile(this.game, 576, 608, "CITY2_TILE1"));
        this.levelEntities[0][0][0].push(new Tile(this.game, 640, 608, "CITY2_TILE1"));
        this.levelEntities[0][0][0].push(new Tile(this.game, 704, 608, "CITY2_TILE1"));
        this.levelEntities[0][0][0].push(new Tile(this.game, 768, 608, "CITY2_TILE1"));
        this.levelEntities[0][0][0].push(new Tile(this.game, 832, 608, "CITY2_TILE1"));
        this.levelEntities[0][0][0].push(new Tile(this.game, 896, 608, "CITY2_TILE1"));
        this.levelEntities[0][0][0].push(new Tile(this.game, 960, 608, "CITY2_TILE1"));
        // Background + Portal + Killbox test
        this.levelEntities[0][0][0].push(new Portal(this.game, 905, 520));
        this.levelEntities[0][0][0].push(new KillBox(this.game, 850, 480, 32, 32));
        this.levelEntities[0][0][0].push(new LeftBoundary(this.game, -10, 0, 10, this.canvasHeight));
        this.levelEntities[0][0][0].push(new RightBoundary(this.game, 1024, 0, 10, this.canvasHeight));
        this.levelEntities[0][0][0].push(new World(this.game, 0, 0, 0, 0));

        // Reality 1
        // Displaying current level and puzzle
        this.levelEntities[0][0][1].push(new Widget(this.game, 1, 1));
        // Floor Tiles
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
        // Collision Test
        this.levelEntities[0][0][1].push(new Tile(this.game, 448, 672, "CITY2_TILE1"));
        this.levelEntities[0][0][1].push(new KillBox(this.game, 448 + KILLW, 672 + KILLH, KILLH, KILLH));
        // Box Test
        this.levelEntities[0][0][1].push(new LittleBox(this.game, 192, 704));
        // Jump Test
        this.levelEntities[0][0][1].push(new Tile(this.game, 576, 608, "CITY2_TILE1"));
        this.levelEntities[0][0][1].push(new Tile(this.game, 640, 608, "CITY2_TILE1"));
        this.levelEntities[0][0][1].push(new Tile(this.game, 704, 608, "CITY2_TILE1"));
        this.levelEntities[0][0][1].push(new Tile(this.game, 768, 608, "CITY2_TILE1"));
        this.levelEntities[0][0][1].push(new Tile(this.game, 832, 608, "CITY2_TILE1"));
        this.levelEntities[0][0][1].push(new Tile(this.game, 896, 608, "CITY2_TILE1"));
        this.levelEntities[0][0][1].push(new Tile(this.game, 960, 608, "CITY2_TILE1"));
        // Background + Portal
        this.levelEntities[0][0][1].push(new Portal(this.game, 905, 520));
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
        this.levelEntities[0][1][0].push(new KillBox(this.game, 448 + KILLW, 633 + KILLH, KILLH, KILLH));
        this.levelEntities[0][1][0].push(new Tile(this.game, 896, 585, "CITY2_TILE1"));
        this.levelEntities[0][1][0].push(new KillBox(this.game, 896 + KILLW, 585 + KILLH, KILLH, KILLH));
        // Background + Portal
        this.levelEntities[0][1][0].push(new Portal(this.game, 896, 505));
        this.levelEntities[0][1][0].push(new LeftBoundary(this.game, -10, 0, 10, this.canvasHeight));
        this.levelEntities[0][1][0].push(new RightBoundary(this.game, 1024, 0, 10, this.canvasHeight));
        this.levelEntities[0][1][0].push(new World(this.game, 0, 0, 1, 0));

        // Reality 1
        // Displaying current level and puzzle
        this.levelEntities[0][1][1].push(new Widget(this.game, 1, 2));
        // Floor
        this.levelEntities[0][1][1].push(new Tile(this.game, 0, 736, "CITY2_TILE1"));
        // Kill Tiles
        this.levelEntities[0][1][1].push(new KillBox(this.game, 64, 896, 1064, 16)); // under the map

        // Alternating platforms (665 good start)
        this.levelEntities[0][1][1].push(new Tile(this.game, 192, 665, "CITY2_TILE1"));
        this.levelEntities[0][1][1].push(new KillBox(this.game, 192 + KILLW, 665 + KILLH, KILLH, KILLH));
        this.levelEntities[0][1][1].push(new Tile(this.game, 704, 665, "CITY2_TILE1"));
        this.levelEntities[0][1][1].push(new KillBox(this.game, 704 + KILLW, 665 + KILLH, KILLH, KILLH));
        // Background + Portal
        this.levelEntities[0][1][1].push(new Portal(this.game, 896, 505));
        this.levelEntities[0][1][1].push(new LeftBoundary(this.game, -10, 0, 10, this.canvasHeight));
        this.levelEntities[0][1][1].push(new RightBoundary(this.game, 1024, 0, 10, this.canvasHeight));
        this.levelEntities[0][1][1].push(new World(this.game, 0, 0, 1, 1));
    }

    // Level 0 Puzzle 2
    push02(){
        // Displaying current level and puzzle
        this.levelEntities[0][2][0].push(new Widget(this.game, 1, 3));
        //
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
        this.levelEntities[0][2][0].push(new Tree(this.game, 900, 700, "STree"));
        this.levelEntities[0][2][0].push(new Tree(this.game, 800, 530, "BTree"));
        this.levelEntities[0][2][0].push(new World(this.game, 0, 0, 0, 0));
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
        // World + Boundaries
        this.levelEntities[0][3][1].push(new LeftBoundary(this.game, -10, 0, 10, this.canvasHeight));
        this.levelEntities[0][3][1].push(new RightBoundary(this.game, 1024, 0, 10, this.canvasHeight));
        this.levelEntities[0][3][1].push(new World(this.game, 0, 0, 3, 1));
    }

    //////////////////////////

    // Level 1 Puzzle 0
    push10(){

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

    }

    // Level 2 Puzzle 1
    push21(){

    }

    // Level 2 Puzzle 2
    push22(){

    }
}