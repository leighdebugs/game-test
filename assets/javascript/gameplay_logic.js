// get element via click
// if/then for moving forward/back
// function to load page

// function goBack (){
// 	if (this.id == "back") {
// 	console.log("click works");
// 	};
// };

window.onload = function() {
	document.getElementById("next").onclick = function goForward (){
		if (this.id == "next") {
			console.log("click works");
		};
	};
};


