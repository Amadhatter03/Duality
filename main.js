const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
// Character Sprites
ASSET_MANAGER.queueDownload("./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/Idle.png");
ASSET_MANAGER.queueDownload("./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/IdleLeft.png");
ASSET_MANAGER.queueDownload("./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/Walk.png");
ASSET_MANAGER.queueDownload("./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/WalkLeft.png");
ASSET_MANAGER.queueDownload("./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/Run.png");
ASSET_MANAGER.queueDownload("./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/RunLeft.png");

// Tile Sprites
ASSET_MANAGER.queueDownload("./Sprites/Sidescroller Shooter - Central City/Sidescroller Shooter - Central City/Assets/Tiles.png");
ASSET_MANAGER.queueDownload("./Sprites/Action Pack - CITY/Action Pack - CITY/Assets/Assets_City.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	// This will need to change (Implement SceneManager.js and levels.js)
	// Character (304 is good)
	// gameEngine.addEntity(new Guy(gameEngine, 0, 304));
	gameEngine.addEntity(new Guy(gameEngine, 0, 250));
	//Floor
	gameEngine.addEntity(new Tile(gameEngine, 0, 736, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 63, 736, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 126, 736, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 189, 736, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 252, 736, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 315, 736, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 378, 736, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 441, 736, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 504, 736, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 567, 736, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 630, 736, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 693, 736, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 756, 736, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 819, 736, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 882, 736, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 945, 736, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 1008, 736, "CITY2_TILE1"));

	// Collision Test 
	gameEngine.addEntity(new Tile(gameEngine, 567, 704, "CITY2_TILE1"));

	gameEngine.init(ctx);

	gameEngine.start();
});
