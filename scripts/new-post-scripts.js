const sanitizeBindCode = function(canvasCtx, codeText) {
	const locals = {};
	
	
	const callableObj = Function("tick",
		"(" + codeText + ")(this.canvasCtx, this.locals, tick);"
	).bind({
		"canvasCtx": canvasCtx,
		"locals": locals
	});
	
	return callableObj;
}

const registerAllEventHandlers = function(event) {
	document.getElementById("post-code-eval-input").addEventListener("click", (eventObj) => {
		const MAX_TICKS = 360;
		
		const canvasObj = document.getElementById("post-code-canvas");
		const canvasCtx = canvasObj.getContext("2d");
		const textinObj = document.getElementById("post-code-input-area");
		
		const ticksNow = document.getElementById("post-code-current-tick");
		const ticksMax = document.getElementById("post-code-current-tick");
		
		ticksNow.innerText = "0";
		ticksMax.innerText = MAX_TICKS;
		
		// clear canvas
		canvasCtx.clearRect(0, 0, canvasObj.width, canvasObj.height);
		
		// create sanitized funtion
		const sanitizedCallable = sanitizeBindCode(canvasCtx, textinObj.value);
	
		
		var tick = 0;
		
		const intervalId = setInterval(() => {
			ticksNow.innerText = "" + tick;
			
			if(tick >= MAX_TICKS) {
				clearInterval(intervalId);
			};
			
			sanitizedCallable(tick);
			
			tick++;
		}, 10);
		
	});
	
	document.getElementById("post-submit-button").addEventListener("click", (eventObj) => {
		alert("This would validate inputs and use 'fetch' to send them to the server - if there was any server in the first place");
		
	});
};