window.onload = function() {
	var game = new Phaser.Game(800, 600, Phaser.AUTO);
	// Add the States your game has.
	// game.state.add("Boot", Boot);
	// game.state.add("Menu", Menu);
	// game.state.add("Preload", Preload);
	game.state.add("Login", Login);
	game.state.start("Login");
	
	//创建网络接口
	CreateWs("192.168.31.12","9081","/ws/join");
	//string linkestr = "ws://192.168.31.122:7540/ws/join?guid=bd5aaa217aa5fe73bc62574e9e8db6388dec246a";
	//ws = new WebSocket("ws://192.168.31.12:9081/ws/join");
	//console.log("linkestr = "+ linkestr);
};
