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

// Coin Sprite
ASSET_MANAGER.queueDownload("./Sprites/SpinningCoin/SpinningCoin/Spinning Coin.png");

// Wind Sprite
ASSET_MANAGER.queueDownload("./Sprites/WindSprite.png");

// Blind Sign Sprite
ASSET_MANAGER.queueDownload("./Sprites/Free Industrial Zone Tileset/3 Objects/Pointer1.png");

// Tree sprite
ASSET_MANAGER.queueDownload("./Sprites/Trees/TREE 4_ SANDY GREEN.png");
ASSET_MANAGER.queueDownload("./Sprites/Trees/TREE 7_SANDY GREEN.png");

// Falling Water sprites
ASSET_MANAGER.queueDownload("./Sprites/waterfall/waterfall_blue_single-Sheet.png");
ASSET_MANAGER.queueDownload("./Sprites/waterfall/waterfall_green_single-Sheet.png");
ASSET_MANAGER.queueDownload("./Sprites/waterfall/waterfall_blue_gate-Sheet.png");
ASSET_MANAGER.queueDownload("./Sprites/waterfall/waterfall_green_gate-Sheet.png");

// Level 0 Background Sprites (Street)
ASSET_MANAGER.queueDownload("./Sprites/Test Map A.png");
ASSET_MANAGER.queueDownload("./Sprites/Test Map B.png");

// Level 0 Background Sprites (Underground)
ASSET_MANAGER.queueDownload("./Sprites/Underground A.png");
ASSET_MANAGER.queueDownload("./Sprites/Underground B.png");

// Level 0 Background Sprites (Sky/Rooftop)
ASSET_MANAGER.queueDownload("./Sprites/SkyBackground.png");
ASSET_MANAGER.queueDownload("./Sprites/SkyBackgroundNight.png");

// Level 1 Background Sprites (Sky/Rooftop)
ASSET_MANAGER.queueDownload("./Sprites/SkyBackground2.png");
ASSET_MANAGER.queueDownload("./Sprites/SkyBackground2alt.png");

// Win Screens
ASSET_MANAGER.queueDownload("./Sprites/Win A.png");
ASSET_MANAGER.queueDownload("./Sprites/Win B.png");

// Vacations
ASSET_MANAGER.queueDownload("./Sprites/Beach Ending.png");
ASSET_MANAGER.queueDownload("./Sprites/Mountains Ending.png");
ASSET_MANAGER.queueDownload("./Sprites/Town Ending.png");
ASSET_MANAGER.queueDownload("./Sprites/Tree Ending.png");

// Game Music
ASSET_MANAGER.queueDownload("./Audio/Cyrus - Freedom.mp3");

// Sound Effects
ASSET_MANAGER.queueDownload("./Audio/retro-coin.mp3"); // Coin
ASSET_MANAGER.queueDownload("./Audio/step.wav"); // Walking
ASSET_MANAGER.queueDownload("./Audio/hurt.wav"); // hurt


ASSET_MANAGER.downloadAll(() => {

	// Repeating soundtrack
	ASSET_MANAGER.autoRepeat("./Audio/Cyrus - Freedom.mp3");

	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.init(ctx);

	new SceneManager(gameEngine);

	gameEngine.start();
});