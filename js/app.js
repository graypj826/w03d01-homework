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

$('#nameButton').on("click",() => {
	const $nameInput = $("input:text").val();
		
	personalizeTama($nameInput);
	});

	const personalizeTama = (namingTama) =>{

		$("#tamaPic").animate({
			opacity: 0.25,
			left: "+=50",
			height: "toggle"
		}, 5000, function(){
			$("#tamaPic").attr("src","https://i.pinimg.com/originals/ba/75/d0/ba75d0d62b053285fa0e6c0b6883136e.png");
		})

		// $("#tamaPic").attr({
		// 	opacity: 0.25,
		// 	left: "+=50",
		// 	height: "toggle"
		// }, 5000, function(){
		// 	$("#tamaPic").attr("src","https://i.pinimg.com/originals/ba/75/d0/ba75d0d62b053285fa0e6c0b6883136e.png");
		// })
		$('#get-name').hide();
		$("h1:contains('Tamagotchi')").text(`${namingTama}`)
		$("h2:contains('all')").text(`all about ${namingTama}`)
		$("#feedTama").text(`Feed ${namingTama}`)
		$("button:contains('play with')").text(`play with ${namingTama}`)
		
		$("h3:contains('hunger:')").text(`hunger: ${tony.hunger}`);
		$("h3:contains('sleepiness:')").text(`sleepiness: ${tony.sleepiness}`);
		$("h3:contains('boredom:')").text(`boredom: ${tony.boredom}`);
		$("h3:contains('age:')").text(`age: ${tony.age}`);
		
		const timePassing = () => {
			seconds ++;
			tony.hunger ++;
			 $("h3:contains('hunger:')").text(`hunger: ${tony.hunger}`);

			tony.sleepiness ++;
			$("h3:contains('sleepiness:')").text(`sleepiness: ${tony.sleepiness}`);

			tony.boredom ++;
			$("h3:contains('boredom:')").text(`boredom: ${tony.boredom}`);

			tony.age ++;
			$("h3:contains('age:')").text(`age: ${tony.age}`);

			if (tony.age === 5){
			evolve()
			}

			if (tony.age === 9){
			evolve()
			}

			if (tony.hunger >= 10 || tony.sleepiness >= 10 || tony.boredom >= 10){
				clearInterval(timePasses);
				$("#tamaPic").animate({
					opacity: 0.25,
					left: "+=50",
					height: "toggle"
					}, 5000, function(){

					});
	
				$("body").text("DEATH");

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
	$("#sleepiness").text(`sleepiness: ${tony.sleepiness}`);
	console.log("rest")
})

$("#playTama").click(function(){
	tony.boredom --;
	$("#boredom").text(`boredom: ${tony.boredom}`);
	//launch tamagame (memory game or squares game?, rest to 0)

})

const evolve = () =>{
	if (tony.age == 5){
		$("#tama-pic").attr("src","https://orig00.deviantart.net/9703/f/2015/050/0/c/kawaii_monster_by_smilegabby-d8ioaph.png")
	} else if (tony.age == 9){
		$("#tama-pic").attr("src", "http://p7.storage.canalblog.com/76/83/558239/97800057_o.png")
	}
}






//todo naming/login screen
//evolution of tama
//preggers tama
//game for play tama
//style
  // retro design with pixelated tama and flowing trees
//jquery slideup and down for tama
//evolution egg at login --> name tama --> baby tama --> juvenile tama -->fullgrown tama
//bouncing movement?