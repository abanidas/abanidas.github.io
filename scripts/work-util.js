$(".proj").click(function() {
	if (this.id == "lpo") {
		location.href = "https://abanidas.github.io/proj_lpo";
	}
	else if (this.id == "bbc") {
		window.open("https://play.google.com/store/apps/details?id=com.abani.bbc.bbcorder&hl=en", "_blank");
	}
	else if (this.id == "movies") {
		window.open("https://github.com/abanidas/PopularMoviesApp", "_blank");
	}
	else if (this.id == "byju") {
		window.open("https://github.com/abanidas/ByjuCloneApp", "_blank");
	}
	else if (this.id == "discuss") {
		window.open("https://github.com/abanidas/discussion-board-microservice", "_blank");
	}
});