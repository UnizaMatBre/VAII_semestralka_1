const sanitizedEvalCode = function(textareaObj, canvasObj) {
	alert(textareaObj.value);
	
	
}

const registerAllEventHandlers = function(event) {
	document.getElementById("post-code-eval-input").addEventListener("click", (eventObj) => {
		alert("eval click");
		
	});
	
}