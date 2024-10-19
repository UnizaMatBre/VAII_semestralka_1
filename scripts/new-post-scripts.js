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
		const canvasObj = document.getElementById("post-code-canvas");
		const canvasCtx = canvasObj.getContext("2d");
		const textinObj = document.getElementById("post-code-input-area");
		
		// clear canvas
		canvasCtx.clearRect(0, 0, canvasObj.width, canvasObj.height);
		
		// create sanitized funtion
		const sanitizedCallable = sanitizeBindCode(canvasCtx, textinObj.value);
	
		
		var tick = 0;
		
		const intervalId = setInterval(() => {
			if(tick >= 360) {
				alert("done");
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