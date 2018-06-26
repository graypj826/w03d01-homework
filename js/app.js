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

const tony = new Tamagotchi (8, 8, 8, 2);

//what we need: timer to increase stats for inactivity, reset to 0 each time stats go up or 
//timer for age? 



$('#nameButton').on("click",() => {
	const $nameInput = $("input:text").val();
		
	personalizeTama($nameInput);
	});

	const personalizeTama = (namingTama) =>{
		console.log(namingTama);
		$("h2:contains('all')").text(`all about ${namingTama}`)
		$("#feedTama").text(`Feed ${namingTama}`)
		$("button:contains('play with')").text(`play with ${namingTama}`)
		
		$("h3:contains('hunger:')").text(`hunger: ${tony.hunger}`);
		$("h3:contains('sleepiness:')").text(`sleepiness: ${tony.sleepiness}`);
		$("h3:contains('boredom:')").text(`boredom: ${tony.boredom}`);
		$("h3:contains('age:')").text(`age: ${tony.age}`);

		//getOlder();
		//getHungry();
		//getSleepy();
		//getBored();

	}

const getOlder = () => {
  // Start an interval and when it reaches 0, increase the round
  // number
  const timer = setInterval(() => {

    tony.age++; //how do I increase an objects age?
    $("h3:contains('age:')").text(`age: ${tony.age}`);

    if(tony.age >= 10){
      clearInterval(timer);
    } 

  }, 1000);
  // setInterval, how do I stop setInterval
}



const getHungry = () => {
  // Start an interval and when it reaches 0, increase the round
  // number
  const timer = setInterval(() => {

    tony.hunger++; //how do I increase an objects age?
    $("h3:contains('hunger:')").text(`hunger: ${tony.hunger}`);

    if(tony.hunger >= 10){
      clearInterval(timer);
    } 

  }, 4000);
  // setInterval, how do I stop setInterval
}


const getSleepy = () => {
  // Start an interval and when it reaches 0, increase the round
  // number
  const timer = setInterval(() => {

    tony.sleepiness++; 
    $("h3:contains('sleepiness:')").text(`sleepiness: ${tony.sleepiness}`);

    if(tony.sleepiness >= 10){
      clearInterval(timer);
    } 

  }, 1000);
  // setInterval, how do I stop setInterval
}


const getBored = () => {
  // Start an interval and when it reaches 0, increase the round
  // number
  const timer = setInterval(() => {

    tony.boredom++; 
    $("h3:contains('boredom:')").text(`boredom: ${tony.boredom}`);

    if(tony.boredom >= 10){
      clearInterval(timer);
    } 

  }, 1000);
  // setInterval, how do I stop setInterval
}

$("#feedTama").click(function(){
	tony.feed();
	$("#hunger").text(`hunger: ${tony.hunger}`);
	console.log("feed") //too much becomes fat?, oh evloution based off feed rest and play?
})

$("#restTama").click(function(){
	tony.rest();
	$("#sleepiness").text(`sleepiness: ${tony.sleepiness}`);
	console.log("rest")
})

$("#playTama").click(function(){
	tony.play();
	$("#boredom").text(`boredom: ${tony.boredom}`);
	console.log("play")
	//launch tamagame (memory game or squares game?, rest to 0)

})


		


//todo naming/login screen
//evolution of tama
//preggers tama
//game for play tama
//style
  // retro design with pixelated tama and flowing trees
//jquery slideup and down for tama
//evolution egg at login --> name tama --> baby tama --> juvenile tama -->fullgrown tama
//bouncing movement?