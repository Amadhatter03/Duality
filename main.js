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

// Portal Sprite
ASSET_MANAGER.queueDownload("./Sprites/Portal.png");

// Tree sprite
ASSET_MANAGER.queueDownload("./Sprites/Trees/TREE 4_ SANDY GREEN.png");
ASSET_MANAGER.queueDownload("./Sprites/Trees/TREE 7_SANDY GREEN.png");
// Falling Water sprites
ASSET_MANAGER.queueDownload("./Sprites/waterfall/waterfall_blue_single-Sheet.png");
ASSET_MANAGER.queueDownload("./Sprites/waterfall/waterfall_green_single-Sheet.png");
ASSET_MANAGER.queueDownload("./Sprites/waterfall/waterfall_blue_gate-Sheet.png");
ASSET_MANAGER.queueDownload("./Sprites/waterfall/waterfall_green_gate-Sheet.png");
// Background Map Sprites
ASSET_MANAGER.queueDownload("./Sprites/Test Map A.png");
ASSET_MANAGER.queueDownload("./Sprites/Test Map B.png");
ASSET_MANAGER.queueDownload("./Sprites/Win A.png");
ASSET_MANAGER.queueDownload("./Sprites/Win B.png");
ASSET_MANAGER.queueDownload("./Sprites/Beach Ending.png");
ASSET_MANAGER.queueDownload("./Sprites/Mountains Ending.png");
ASSET_MANAGER.queueDownload("./Sprites/Town Ending.png");
ASSET_MANAGER.queueDownload("./Sprites/Tree Ending.png");

ASSET_MANAGER.queueDownload("./Sprites/SpinningCoin/SpinningCoin/Spinning Coin.png");
ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.init(ctx);

	new SceneManager(gameEngine);

	gameEngine.start();
});
