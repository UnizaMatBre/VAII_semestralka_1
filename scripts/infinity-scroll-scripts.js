const createListItem = function(listObj, content) {
	const newLi = document.createElement("li");
	
	newLi.innerHTML = content; 
	
	listObj.insertBefore(newLi, listObj.lastChild );
}


const handleInfiniteScroll = function() {};

const initInfiniteScroller = function(listObj) {
	
	
	
	var itemIndex = 0;
	
	for(itemIndex = 0; itemIndex < 15; itemIndex++) {
		createListItem(listObj, itemIndex);
	};
	
	const newLi = document.createElement("li");
	newLi.innerHTML = "<span>LOADING...</span>";
	
	listObj.appendChild(newLi);
	
	listObj.addEventListener("scroll", function(eventObj){
		const contentHeight = listObj.scrollHeight - listObj.offsetHeight;
	
		if (contentHeight <= listObj.scrollTop) {
			alert("reached end!");
			
			// this is here purely to create illusion of loading
			setTimeout(()=>{
				for(var index = 0; index < 10; index++) {
					createListItem(listObj, ++itemIndex);
				};
			}, 5000);
		};
	});	
	
};