class Tamagotchi {
	constructor (hunger, sleepiness, boredom, age){
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.age = age;
	}
}

const tony = new Tamagotchi (1, 1, 1, 1);

//what we need: timer to increase stats for inactivity, reset to 0 each time stats go up or 
//timer for age? 
$('#nameButton').ready(function(){
	$('button').on("click",() => {
		const $nameInput = $("input:text").val();
		
		
		personalizeTama($nameInput);
	})

	const personalizeTama = (namingTama) =>{
		console.log(namingTama);
		$("h2:contains('all')").text(`all about ${namingTama}`)
		$("#feedTama").text(`Feed ${namingTama}`)
		$("button:contains('play with')").text(`play with ${namingTama}`)


	}

})
