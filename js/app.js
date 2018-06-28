class Tamagotchi {
	constructor (hunger, sleepiness, boredom, age){
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.age = age;
	}

	feed(){
		// if(this.hunger > 1){
			this.hunger--;
		// }
	}
	rest(){
		// if(this.rest > 1){
			this.sleepiness--;
		// }
	}
	play(){
		// if(this.play > 1){
			this.boredom--;
		}

	// }
}

const tony = new Tamagotchi (0, 0, 0, 0);

let seconds = 0

$('.to-hide').hide()

$('#nameButton').on("click",() => {
	const $nameInput = $("input:text").val();	
	personalizeTama($nameInput);
	$('#playAgain').hide()
	$('.to-hide').show();
	tonyReset();
});
	

const personalizeTama = (namingTama) =>{
		
		$('#get-name').hide();
		
		
		$('#image-display').css("background-image", "url(https://s-media-cache-ak0.pinimg.com/originals/98/7e/eb/987eebdb5a02bb22ca7fdfe256f1c9a9.gif)").css("background-size", "contain")

		
		//$('body').append(toAdd);
		$("h1:contains('Tamagotchi')").text(`${namingTama}`)
		$("h2:contains('all')").text(`all about ${namingTama}`)
		$("#feedTama").text(`Feed ${namingTama}`)
		$("button:contains('play with')").text(`play with ${namingTama}`)
		
		$("h3:contains('hunger:')").text(`hunger: ${tony.hunger}`);
		$("h3:contains('sleepiness:')").text(`sleepiness: ${tony.sleepiness}`);
		$("h3:contains('boredom:')").text(`boredom: ${tony.boredom}`);
		// $("h3:contains('age:')").text(`age: ${tony.age}`);
		

		const timePassing = () => {
			seconds ++;
			tony.hunger ++;
			 $("#hunger").text(`hunger: ${tony.hunger}`);

			tony.sleepiness ++;
			$('#image-display').css("background-image", "url(https://s-media-cache-ak0.pinimg.com/originals/98/7e/eb/987eebdb5a02bb22ca7fdfe256f1c9a9.gif)").css("background-size", "contain");
			$("#sleepiness").text(`sleepiness: ${tony.sleepiness}`);

			tony.boredom ++;
			$("#boredom").text(`boredom: ${tony.boredom}`);

			tony.age ++;
			$("#age").text(`age: ${tony.age}`);

			if (tony.age === 2){
			evolve()
			}

			if (tony.age === 6){
			evolve()
			}

			if (tony.hunger >= 10 || tony.sleepiness >= 10 || tony.boredom >= 10){
				clearInterval(timePasses);
				death();
				}	
			}
	const timePasses = setInterval(timePassing,1000);

	}


$("#feedTama").click(function(){
	tony.hunger --
	$("#hunger").text(`hunger: ${tony.hunger}`);
	console.log("feed") //too much becomes fat?, oh evloution based off feed rest and play?
})

$("#restTama").click(function(){
	tony.sleepiness --;
	randomNight();
	//setTimeout
	$("#sleepiness").text(`sleepiness: ${tony.sleepiness}`);
})	

$("#playTama").click(function(){
	tony.boredom --;
	$("#boredom").text(`boredom: ${tony.boredom}`);
	//launch tamagame (memory game or squares game?, rest to 0)

})

const evolve = () =>{
	if (tony.age == 2){
		$("#tama-pic").fadeOut(
		600,
		function(){
		fadeTamaIn()
	})
	} else if (tony.age == 6){
		$("#tama-pic").fadeOut(
		600,
		function(){
		fadeTamaIn()

	})
	}
}

const fadeTamaIn = () => {
	if (tony.age == 2){
	$("#tama-pic").attr("src","https://orig00.deviantart.net/9703/f/2015/050/0/c/kawaii_monster_by_smilegabby-d8ioaph.png")
	$("#tama-pic").fadeIn(
		300);
	} else if(tony.age == 6){
	$("#tama-pic").attr("src","https://i.pinimg.com/originals/1b/63/e1/1b63e1610e111da79fc638560870775d.png")
	$("#tama-pic").fadeIn(
		300);
	}
}	

const deathFadeIn = () => {
	$("#tama-pic").attr("src", "https://orig00.deviantart.net/d4c3/f/2013/302/c/6/kawaii_ghost_by_amis0129-d6s8i8o.png");
	$("#tama-pic").fadeIn(
		300)
	$('#image-display').css("background-image", "url(http://25.media.tumblr.com/tumblr_lw7hmdGU5N1r81qodo1_500.gif)").css("background-size", "contain").css("margin-bottom:5%");
	$('#image-display').fadeIn(
		300)
}

const tonyReset = () => {
	$("#tama-pic").attr("src", "https://archive-media-0.nyafuu.org/vp/image/1370/75/1370750993164.png");
	tony.age = 0
	tony.hunger = 0 
	tony.sleepiness = 0
	tony.boredom = 0
}

const deathScreen = () => {
	$(".hide-at-death").hide();
	$("h1").text("You're Tamagotchi has died")
	deathFadeIn()
	$("#image-display").after("<h1 id='playAgain'> play again? </h1>");
	$("input:text").val(' ');
	$('#get-name').show();
	
}


const death = () =>{
	$("#tama-pic").fadeOut(
		600,
	function(){
		$("body-display").append(deathScreen())
		
	})

}



const randomNight = () => {
	const randomNumber = Math.floor(Math.random() * 90);
	if (randomNumber <= 30){
		$('#image-display').css("background-image", "url(https://archive-media-0.nyafuu.org/bant/image/1496/02/1496021199032.gif)").css("background-size", "contain")
		console.log("night 1");
	} else if ( randomNumber <= 85 && randomNumber >= 30){
		 $('#image-display').css("background-image", "url(https://i.pinimg.com/originals/22/cf/de/22cfde6c6415e1f061e49e0983059782.gif)").css("background-size", "contain")
		console.log("night 2");
	} else {	
		$('#image-display').css("background-image", "url(http://redcandlegames.com/detention/images/B006.gif)").css("background-size", "contain")
		console.log("night 3");
	}
};


// const moveRight = () => {
//        $("#tama-pic").animate({
//        left: "+=188"
//      }, 2000, function() {
//         moveLeft();

//      });
//    }

// const moveLeft = () => {
//        $("#tama-pic").animate({
//        left: "-=188"
//      }, 2000, function() {
//         setTimeout(moveRight, 50);

//      });
//    }

//    setTimeout(moveRight, 50);
// const moveUp = () => {
//        $("#tama-pic").animate({
//        bottom: "+=30"
//      }, 100, function() {
//         moveDown()

//      });
//    }
// const moveDown = () => {
//        $("#tama-pic").animate({
//        bottom: "-=30"
//      }, 100, function(){
//          $(".bounce").animate({
//              left: "0"
//          }, 2000, function(){
//              moveRight();
//          })
//      });

//    }
// $(".play").click(function(){
//     firstTamogatchi.play();
//     $(".bounce").stop();
//     moveUp();

// });