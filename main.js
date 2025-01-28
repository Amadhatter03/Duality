const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
// Character Sprites
ASSET_MANAGER.queueDownload("./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/Idle.png");
ASSET_MANAGER.queueDownload("./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/IdleLeft.png");
ASSET_MANAGER.queueDownload("./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/Walk.png");
ASSET_MANAGER.queueDownload("./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/WalkLeft.png");
ASSET_MANAGER.queueDownload("./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/Run.png");
ASSET_MANAGER.queueDownload("./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/RunLeft.png");
ASSET_MANAGER.queueDownload("./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/Jump.png");
ASSET_MANAGER.queueDownload("./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/JumpLeft.png");
// Tile Sprites
ASSET_MANAGER.queueDownload("./Sprites/Sidescroller Shooter - Central City/Sidescroller Shooter - Central City/Assets/Tiles.png");
ASSET_MANAGER.queueDownload("./Sprites/Action Pack - CITY/Action Pack - CITY/Assets/Assets_City.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	// This will need to change (Implement SceneManager.js and levels.js)
	// Character (304 is good)
	// gameEngine.addEntity(new Guy(gameEngine, 0, 304));
	gameEngine.addEntity(new Guy(gameEngine, 0, 100));
	//Floor
	gameEngine.addEntity(new Tile(gameEngine, 0, 368, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 63/2, 368, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 126/2, 368, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 189/2, 368, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 252/2, 368, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 315/2, 368, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 378/2, 368, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 441/2, 368, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 504/2, 368, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 567/2, 368, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 630/2, 368, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 693/2, 368, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 756/2, 368, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 819/2, 368, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 882/2, 368, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 945/2, 368, "CITY2_TILE1"));
	gameEngine.addEntity(new Tile(gameEngine, 1008/2, 368, "CITY2_TILE1"));
	// Collision Test 
	gameEngine.addEntity(new Tile(gameEngine, 567 /2 , 352, "CITY2_TILE1"));

	gameEngine.init(ctx);

	gameEngine.start();
});
