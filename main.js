const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/Idle.png");
ASSET_MANAGER.queueDownload("./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/IdleLeft.png");
ASSET_MANAGER.queueDownload("./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/Walk.png");
ASSET_MANAGER.queueDownload("./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/WalkLeft.png");
ASSET_MANAGER.queueDownload("./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/Run.png");
ASSET_MANAGER.queueDownload("./Sprites/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/RunLeft.png");
ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	gameEngine.addEntity(new Guy(gameEngine,0,0));
	gameEngine.init(ctx);

	gameEngine.start();
});
