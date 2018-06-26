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
		
		$("h3:contains('hunger:')").text(`hunger: ${tony.hunger}`);
		$("h3:contains('sleepiness:')").text(`sleepiness: ${tony.sleepiness}`);
		$("h3:contains('boredom:')").text(`boredom: ${tony.boredom}`);
		$("h3:contains('age:')").text(`age: ${tony.age}`);

		getOlder();

	}

})


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

