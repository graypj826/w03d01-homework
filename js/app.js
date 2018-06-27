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
			console.log("is this working")
		// }
	}
	rest(){
		// if(this.rest > 1){
			this.sleepiness--;
			console.log('what the hell')
		// }
	}
	play(){
		// if(this.play > 1){
			this.boredom--;
			console.log('what the hell')
		}

	// }
}

const tony = new Tamagotchi (1, 1, 1, 1);

let seconds = 0

$('.to-hide').hide()

$('#nameButton').on("click",() => {
	const $nameInput = $("input:text").val();
		
	personalizeTama($nameInput);
	});

	const personalizeTama = (namingTama) =>{

		$('.to-hide').show();
		$('#image-display').css("background-image", "url(https://s-media-cache-ak0.pinimg.com/originals/98/7e/eb/987eebdb5a02bb22ca7fdfe256f1c9a9.gif)").css("background-size", "contain")
		// $("#tamaPic").animate({
		// 	opacity: 0.25,
		// 	left: "+=50",
		// 	height: "toggle"
		// }, 5000, function(){
		// 	$("#tamaPic").attr("src","https://i.pinimg.com/originals/ba/75/d0/ba75d0d62b053285fa0e6c0b6883136e.png");
		// })

		
		//$('body').append(toAdd);
		$("h1:contains('Tamagotchi')").text(`${namingTama}`)
		$("h2:contains('all')").text(`all about ${namingTama}`)
		$("#feedTama").text(`Feed ${namingTama}`)
		$("button:contains('play with')").text(`play with ${namingTama}`)
		
		$("h3:contains('hunger:')").text(`hunger: ${tony.hunger}`);
		$("h3:contains('sleepiness:')").text(`sleepiness: ${tony.sleepiness}`);
		$("h3:contains('boredom:')").text(`boredom: ${tony.boredom}`);
		$("h3:contains('age:')").text(`age: ${tony.age}`);
		$('#get-name').hide();

		const timePassing = () => {
			seconds ++;
			tony.hunger ++;
			 $("#hunger").text(`hunger: ${tony.hunger}`);

			tony.sleepiness ++;
			$('#image-display').css("background-image", "url(https://s-media-cache-ak0.pinimg.com/originals/98/7e/eb/987eebdb5a02bb22ca7fdfe256f1c9a9.gif)").css("background-size", "contain");
			$("#sleepiness").text(`sleepiness: ${tony.sleepiness}`);
			console.log(tony.hunger);

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
	const timePasses = setInterval(timePassing,6000);

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
		$("#tama-pic").attr("src","https://orig00.deviantart.net/9703/f/2015/050/0/c/kawaii_monster_by_smilegabby-d8ioaph.png")
	} else if (tony.age == 6){
		$("#tama-pic").hide();
	}
}
const deathScreen = () => {
	$(".hide-at-death").hide();
	$("h1").text("You're Tamagotchi has died")
	$("h1").append("<img src='http://aleshadrew.com/wp-content/uploads/2014/11/monster_cry.gif'>");
}


const death = () =>{
	console.log("le death")
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

// const toAdd = "<h2> all about your Tamagotchi: </h2> <div class = 'single-stat-div'> <h4 id='hunger'> hunger: </h3></div><div class = 'single-stat-div'><h4 id='sleepiness'> sleepiness: </h3></div><div class = 'single-stat-div'><h4 id='boredom'> boredom: </h3></div><div class = 'single-stat-div'><h4 id='age'> age: </h3></div><div class='activity'><h4> what would you like to do? </h2><button id='feedTama'> feed your tamagotchi </button> <!--change the name to match the Tama --><button id='restTama'> turn off the lights </button><button id='playTama'> play with your tamagotchi </button> <!-- change the name to match the tama --></div>"


//todo naming/login screen
//evolution of tama
//preggers tama
//game for play tama
//style
  // retro design with pixelated tama and flowing trees
//jquery slideup and down for tama
//evolution egg at login --> name tama --> baby tama --> juvenile tama -->fullgrown tama
//bouncing movement?