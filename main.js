onload=function(){

	//Homepage project title hover with image
	scholls = document.querySelector("#DRS");
	illy = document.querySelector("#illy");
	playground = document.querySelector("#playground");
	schollsImg1 = document.querySelector(".DRSImg.phone");
	schollsImg2 = document.querySelector(".DRSImg.tablet");
	illyImg = document.querySelector(".illyImg");
	playgroundImg = document.querySelector(".playgroundImg");

	if (scholls) {
		scholls.onmouseover=function() {
		schollsImg1.style.opacity = "1";
		schollsImg1.style.marginTop = "100px";
		schollsImg2.style.opacity = "1";
		schollsImg2.style.left = "30px";
		}

		scholls.onmouseout=function() {
			schollsImg1.style.opacity = "0";
			schollsImg1.style.marginTop = "300px";
			schollsImg2.style.opacity = "0";
			schollsImg2.style.left = "100px";
		}

	}

	if (illy) {
		illy.onmouseover=function() {
			illyImg.style.opacity = "1";
		}

		illy.onmouseout=function() {
			illyImg.style.opacity = "0";
		}		
	}

	if (playground) {
		playground.onmouseover=function() {
			playgroundImg.style.opacity = "1";
		}

		playground.onmouseout=function() {
			playgroundImg.style.opacity = "0";
		}

	}

	 else {
		//nothing happens
	}


}

