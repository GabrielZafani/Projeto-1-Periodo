

const scriptsInEvents = {

	async Geral_Event18_Act2(runtime, localVars)
	{
		//obter o valor da váriavel global
		let Vidas = runtime.globalVars.Vidas;
		
		Vidas --;
		
		//atualiza a vaiável global
		runtime.globalVars.Vidas = Vidas;
		
		// se vidas chegarem a zero 
		if(Vidas <=0) {
			console.log("Game Over")
			runtime.goToLayout("GameOver")
			}
	},

	async Fase2_Event7_Act2(runtime, localVars)
	{
		//obter o valor da váriavel global
		let Vidas = runtime.globalVars.Vidas;
		
		Vidas --;
		
		//atualiza a vaiável global
		runtime.globalVars.Vidas = Vidas;
		
		// se vidas chegarem a zero 
		if(Vidas <=0) {
			console.log("Game Over")
			runtime.goToLayout("GameOver")
			}
			
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
