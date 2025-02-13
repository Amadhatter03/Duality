class SceneManager {
    constructor(game) {
        this.game = game;
        this.guy = new Guy(this.game, -32, 608);
        this.level = 0;
        this.puzzle = 0;
        this.reality = 0;

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
                    let currentEnd = 1  // Change this variable everytime a new level has been made
                    if (this.guy.portalReady && this.level < currentEnd) {
                        this.level += 1;
                        this.puzzle = 0;
                        this.reality = 0;

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
            for (let j = 0; j < 3; j++) { // three puzzles
                this.levelEntities[i].push([]);
                for (let k = 0; k < 2; k++) { // two realities
                    this.levelEntities[i][j].push([]);
                }
            }
        }

        // Push Level Entities
        this.push00();
        this.push10()
        
    }
    // Level 0 Puzzle 0
    push00(){
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
        // Collision Test
        this.levelEntities[0][0][0].push(new Tile(this.game, 256, 704, "CITY2_TILE1"));
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
        this.levelEntities[0][0][0].push(new LeftBoundary(this.game, -10, 0, 10, 768));
        this.levelEntities[0][0][0].push(new RightBoundary(this.game, 1024, 0, 10, 768));
        this.levelEntities[0][0][0].push(new World(this.game, 0, 0, 0, 0));

        // Reality 1
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
        this.levelEntities[0][0][1].push(new LeftBoundary(this.game, -10, 0, 10, 768));
        this.levelEntities[0][0][1].push(new RightBoundary(this.game, 1024, 0, 10, 768));
        this.levelEntities[0][0][1].push(new World(this.game, 0, 0, 0, 1));
    }

    // Level 0 Puzzle 1
    push01(){

    }

    // Level 0 Puzzle 2
    push02(){

    }

    //////////////////////////

    // Level 1 Puzzle 0
    push10(){
        // Reality 0
        // Floor tiles
        this.levelEntities[1][0][0].push(new Tile(this.game, 0, 736, "CITY2_TILE1"));
        // Kill Tiles (Under the map)
        this.levelEntities[1][0][0].push(new KillBox(this.game, 64, 896, 960, 16));
        // Alternating platforms (665 good start) (256 seperator)
        this.levelEntities[1][0][0].push(new Tile(this.game, 448, 633, "CITY2_TILE1"));
        this.levelEntities[1][0][0].push(new Tile(this.game, 896, 585, "CITY2_TILE1"));
        // Background + Portal
        this.levelEntities[1][0][0].push(new Portal(this.game, 896, 505));
        this.levelEntities[1][0][0].push(new LeftBoundary(this.game, -10, 0, 10, 768));
        this.levelEntities[1][0][0].push(new RightBoundary(this.game, 1024, 0, 10, 768));
        this.levelEntities[1][0][0].push(new World(this.game, 0, 0, 1, 0));

        // Reality 1
        // Floor
        this.levelEntities[1][0][1].push(new Tile(this.game, 0, 736, "CITY2_TILE1"));
        // Kill Tiles (Under the map)
        this.levelEntities[1][0][1].push(new KillBox(this.game, 64, 896, 892, 16));
        // Alternating platforms (665 good start)
        this.levelEntities[1][0][1].push(new Tile(this.game, 192, 665, "CITY2_TILE1"));
        this.levelEntities[1][0][1].push(new Tile(this.game, 704, 665, "CITY2_TILE1"));
        // Background + Portal
        this.levelEntities[1][0][1].push(new Portal(this.game, 896, 505));
        this.levelEntities[1][0][1].push(new LeftBoundary(this.game, -10, 0, 10, 768));
        this.levelEntities[1][0][1].push(new RightBoundary(this.game, 1024, 0, 10, 768));
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

    }

    // Level 2 Puzzle 1
    push21(){

    }

    // Level 2 Puzzle 2
    push22(){

    }


}