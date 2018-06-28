class Tamagotchi {
	constructor (hunger, sleepiness, boredom, age){
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.age = age;
	}

	feed(){
		// if(this.hunger > 1){
			if(this.hunger >1 ){
				this.hunger--;
			}
		// }
	}
	rest(){
		// if(this.rest > 1){
			if(this.sleepiness >1){
			this.sleepiness--;	
			}
			
		// }
	}
	play(){
		// if(this.play > 1){
			if(this.boredom>1){
			this.boredom--;
		}
		}

	// }
}

const tony = new Tamagotchi (0, 0, 0, 0);

let seconds = 0

$('.to-hide').hide()

// const moveRight = () => {
//        $(".moveDisShit").animate({
//        left: "+=100"
//      }, 2000, function() {
//         moveLeft();

//      });
//    }

// const moveLeft = () => {
//        $(".moveDisShit").animate({
//        left: "-=100"
//      }, 2000, function() {
//         setTimeout(moveRight, 50);

//      });
//    }

// moveRight();

$('#nameButton').on("click",() => {
	const $nameInput = $("input:text").val();	
	personalizeTama($nameInput);
	$('#playAgain').hide();
	$('#stats-section').show();
	$('.to-hide').show();
	tonyReset();
	$("#hunger").text(`hunger: 0`);
	$("#sleepiness").text(`sleepiness: 0`);
	$("#boredom").text(`boredom: 0`);
	$("#age").text('age: 0')
});
	

const personalizeTama = (namingTama) =>{
		
		$('#get-name').hide();
		
		
		$('#image-display').css("background-image", "url(https://i.pinimg.com/originals/71/3c/bf/713cbf391b7830d6d50738ebf0b91091.gif)")
		//.css("background-size", "contain")

		
		//$('body').append(toAdd);
		$("h1:contains('Tamagotchi')").text(`${namingTama}`)
		$("h2:contains('all')").text(`all about ${namingTama}`)
		$("#feedTama").text(`Feed ${namingTama}`)
		$("button:contains('play with')").text(`play with ${namingTama}`)
		$("button:contains('let')").text(`let ${namingTama} rest`)
		
		// $("h3:contains('age:')").text(`age: ${tony.age}`);
		

		const timePassing = () => {
			seconds ++;
			tony.hunger ++;
			 $("#hunger").text(`hunger: ${tony.hunger}`);

			tony.sleepiness ++;
			document.getElementById("restTama").disabled = false;
			$('#image-display').css("background-image", "url(https://i.pinimg.com/originals/71/3c/bf/713cbf391b7830d6d50738ebf0b91091.gif)")
			//.css("background-size", "contain");
			$("#sleepiness").text(`sleepiness: ${tony.sleepiness}`);

			tony.boredom ++;
			$("#boredom").text(`boredom: ${tony.boredom}`);

			tony.age ++;
			$("#age").text(`age: ${tony.age}`);

			if (tony.age === 2){
			evolve()
			}

			if (tony.age === 2){
			$('#allAbout').hide()
			}

			if (tony.age === 6){
			evolve()
			}

			if (tony.hunger >= 10 || tony.sleepiness >= 10 || tony.boredom >= 10){
				clearInterval(timePasses);
				death();
				}	
			}
	const timePasses = setInterval(timePassing,4000);

	}


$("#feedTama").click(function(){
	fadeFoodInOut() //too much becomes fat?, oh evloution based off feed rest and play?
	$("#hunger").text(`hunger: ${tony.hunger}`);
});

$("#restTama").click(function(){
	randomNight();
	document.getElementById("restTama").disabled = true;
	//setTimeout
	$("#sleepiness").text(`sleepiness: ${tony.sleepiness}`);
})	

$("#playTama").click(function(){
    tony.play();
    moveUp();
	$("#boredom").text(`boredom: ${tony.boredom}`);
});

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
		600);
	} else if(tony.age == 6){
	$("#tama-pic").attr("src","https://i.pinimg.com/originals/1b/63/e1/1b63e1610e111da79fc638560870775d.png")
	$("#tama-pic").fadeIn(
		600);
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
	$("h1").text("Your  Tamagotchi has died")
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
	let randomNumber = Math.floor(Math.random() * 90);
	if (randomNumber <= 30){
		if(tony.sleepiness >4) {
			tony.sleepiness -= 2
			console.log("randomnight running")
		}
		$('#image-display').css("background-image", "url(https://archive-media-0.nyafuu.org/bant/image/1496/02/1496021199032.gif)").css("background-size", "contain")
	} else if ( randomNumber <= 85 && randomNumber >= 30){
		if(tony.sleepiness >4) {
			tony.sleepiness -= 1
			console.log("randomnight running")
		}
		 $('#image-display').css("background-image", "url(https://i.pinimg.com/originals/22/cf/de/22cfde6c6415e1f061e49e0983059782.gif)").css("background-size", "contain")
	} else {
		if(tony.sleepiness >4) {
			tony.sleepiness -= 1
			console.log("randomnight running")
		} 
		$('#image-display').css("background-image", "url(https://media.giphy.com/media/Taib9YO3qCZiw/giphy.gif)").css("background-size", "contain")
	}

};


const fadeFoodInOut = () => {
	let randomNumber = Math.floor(Math.random() * 3);
	if(randomNumber === 1){
		if(tony.hunger >4) {
			tony.hunger -= 2
		}
		$('#stats-section').before('<img class="food" src="https://78.media.tumblr.com/c4e160ddb79839eb78641f70b6e5ca2d/tumblr_ojhc0pB4em1vkpk4fo1_500.png" />')
		$('.food').fadeIn(
			800, function(){
			$('.food').fadeOut(800,function(){
				$('.food').remove()
				}
			)
		})	
	} else if (randomNumber === 2){
		if(tony.hunger >4) {
			tony.hunger -= 1
		}
		$('#stats-section').before('<img class="food" src="https://data.whicdn.com/images/11815670/superthumb.gif?t=1310316270" />')
		$('.food').fadeIn(
			800, function(){
			$('.food').fadeOut(800,function(){
				$('.food').remove()
				}
			)
		})
	} else {
		if(tony.hunger >4) {
			tony.hunger -= 0
		}
		$('#stats-section').before('<img class="food" src="https://s1.piq.land/2014/09/23/92AwHC89RLT2QkrhuZ67WFnr_400x400.png" />')
		$('.food').fadeIn(
			800, function(){
			$('.food').fadeOut(800,function(){
				$('.food').remove()
				}
			)
		})
	}
}

const moveUp = () => {
    $("#tama-pic").animate({
       bottom: "+=20"
     }, 50, function() {
        moveDown()

     });
   }

const moveDown = () => {
       $("#tama-pic").animate({
       bottom: "-=20"
     }, 50, function(){
         $(".bounce").animate({
             left: "0"
         }, 50, function(){
             moveRight();
         })
     });

   }


