class SceneManager {
    constructor(game) {
        this.game = game;
        this.guy = new Guy(this.game, 0, 250);
        this.level = 0;
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
            }
        });
    }

    loadLevel() {
        this.clearEntities();

        for (let entity of this.levelEntities[this.level][this.reality]) {
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
        for (let i = 0; i < 3; i++) { // three levels (ONLY HAVE "1" SO FAR)
            this.levelEntities.push([]);
            for (let j = 0; j < 2; j++) { // two realities
                this.levelEntities[i].push([]);
            }
        }

        // Tiles
        this.levelEntities[0][0].push(new Tile(this.game, 0, 736, "CITY2_TILE1"));
        this.levelEntities[0][0].push(new Tile(this.game, 64, 736, "CITY2_TILE1"));
        this.levelEntities[0][0].push(new Tile(this.game, 128, 736, "CITY2_TILE1"));
        this.levelEntities[0][0].push(new Tile(this.game, 192, 736, "CITY2_TILE1"));
        this.levelEntities[0][0].push(new Tile(this.game, 256, 736, "CITY2_TILE1"));
        this.levelEntities[0][0].push(new Tile(this.game, 320, 736, "CITY2_TILE1"));
        this.levelEntities[0][0].push(new Tile(this.game, 384, 736, "CITY2_TILE1"));
        this.levelEntities[0][0].push(new Tile(this.game, 448, 736, "CITY2_TILE1"));
        this.levelEntities[0][0].push(new Tile(this.game, 512, 736, "CITY2_TILE1"));
        this.levelEntities[0][0].push(new Tile(this.game, 576, 736, "CITY2_TILE1"));
        this.levelEntities[0][0].push(new Tile(this.game, 640, 736, "CITY2_TILE1"));
        this.levelEntities[0][0].push(new Tile(this.game, 704, 736, "CITY2_TILE1"));
        this.levelEntities[0][0].push(new Tile(this.game, 768, 736, "CITY2_TILE1"));
        this.levelEntities[0][0].push(new Tile(this.game, 832, 736, "CITY2_TILE1"));
        this.levelEntities[0][0].push(new Tile(this.game, 896, 736, "CITY2_TILE1"));
        this.levelEntities[0][0].push(new Tile(this.game, 960, 736, "CITY2_TILE1"));
        // Collision Test
        this.levelEntities[0][0].push(new Tile(this.game, 256, 704, "CITY2_TILE1"));
        // Box Test
        this.levelEntities[0][0].push(new LittleBox(this.game, 576, 576));
        // Jump Test
        this.levelEntities[0][0].push(new Tile(this.game, 576, 608, "CITY2_TILE1"));
        this.levelEntities[0][0].push(new Tile(this.game, 640, 608, "CITY2_TILE1"));
        this.levelEntities[0][0].push(new Tile(this.game, 704, 608, "CITY2_TILE1"));
        this.levelEntities[0][0].push(new Tile(this.game, 768, 608, "CITY2_TILE1"));
        this.levelEntities[0][0].push(new Tile(this.game, 832, 608, "CITY2_TILE1"));
        this.levelEntities[0][0].push(new Tile(this.game, 896, 608, "CITY2_TILE1"));
        this.levelEntities[0][0].push(new Tile(this.game, 960, 608, "CITY2_TILE1"));
        // Background + Portal
        this.levelEntities[0][0].push(new Portal(this.game, 905, 520));
        this.levelEntities[0][0].push(new KillBox(this.game, 850, 520));
        this.levelEntities[0][0].push(new World(this.game, 0, 0, 0, 0));

        // Tiles
        this.levelEntities[0][1].push(new Tile(this.game, 0, 736, "CITY2_TILE1"));
        this.levelEntities[0][1].push(new Tile(this.game, 64, 736, "CITY2_TILE1"));
        this.levelEntities[0][1].push(new Tile(this.game, 128, 736, "CITY2_TILE1"));
        this.levelEntities[0][1].push(new Tile(this.game, 192, 736, "CITY2_TILE1"));
        this.levelEntities[0][1].push(new Tile(this.game, 256, 736, "CITY2_TILE1"));
        this.levelEntities[0][1].push(new Tile(this.game, 320, 736, "CITY2_TILE1"));
        this.levelEntities[0][1].push(new Tile(this.game, 384, 736, "CITY2_TILE1"));
        this.levelEntities[0][1].push(new Tile(this.game, 448, 736, "CITY2_TILE1"));
        this.levelEntities[0][1].push(new Tile(this.game, 512, 736, "CITY2_TILE1"));
        this.levelEntities[0][1].push(new Tile(this.game, 576, 736, "CITY2_TILE1"));
        this.levelEntities[0][1].push(new Tile(this.game, 640, 736, "CITY2_TILE1"));
        this.levelEntities[0][1].push(new Tile(this.game, 704, 736, "CITY2_TILE1"));
        this.levelEntities[0][1].push(new Tile(this.game, 768, 736, "CITY2_TILE1"));
        this.levelEntities[0][1].push(new Tile(this.game, 832, 736, "CITY2_TILE1"));
        this.levelEntities[0][1].push(new Tile(this.game, 896, 736, "CITY2_TILE1"));
        this.levelEntities[0][1].push(new Tile(this.game, 960, 736, "CITY2_TILE1"));
        // Collision Test
        this.levelEntities[0][1].push(new Tile(this.game, 448, 672, "CITY2_TILE1"));
        // Box Test
        this.levelEntities[0][1].push(new LittleBox(this.game, 192, 704));
        // Jump Test
        this.levelEntities[0][1].push(new Tile(this.game, 576, 608, "CITY2_TILE1"));
        this.levelEntities[0][1].push(new Tile(this.game, 640, 608, "CITY2_TILE1"));
        this.levelEntities[0][1].push(new Tile(this.game, 704, 608, "CITY2_TILE1"));
        this.levelEntities[0][1].push(new Tile(this.game, 768, 608, "CITY2_TILE1"));
        this.levelEntities[0][1].push(new Tile(this.game, 832, 608, "CITY2_TILE1"));
        this.levelEntities[0][1].push(new Tile(this.game, 896, 608, "CITY2_TILE1"));
        this.levelEntities[0][1].push(new Tile(this.game, 960, 608, "CITY2_TILE1"));
        // Background + Portal
        this.levelEntities[0][1].push(new Portal(this.game, 905, 520));
        this.levelEntities[0][1].push(new World(this.game, 0, 0, 0, 1));
    }
}