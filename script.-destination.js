const planets = document.querySelectorAll(".planet");
let planetheading = document.querySelector(".planetname");
let planetbrief = document.querySelector(".planetbrief");
let avgdis = document.querySelector(".distance h1");
let traveltime = document.querySelector(".traveltime h1");
let planetimg = document.querySelector(".planetimg");
planets[0].addEventListener("click", (e) => {
	planetheading.innerText = "MOON";
	planetbrief.innerText =
		"See our planet as you've never seen it before.A perfect relaxing trip away to hrlp regain persepective and come back refereshed.While you are here take in some history by visting the Luna 2 and apollo 11 landing sites.";
	avgdis.innerText = "384,400 KM";
	traveltime.innerText = "3 DAYS";
	console.log(planetimg.src);
	planetimg.src = "./assets/destination/image-moon.png";
    planets[0].classList.add('active');
    planets[3].classList.remove('active');
    planets[2].classList.remove('active');
    planets[1].classList.remove('active');
});
planets[1].addEventListener("click", (e) => {
	planetheading.innerText = "MARS";
	planetbrief.innerText =
		"Don't forget to pack your hiking boots .You'll need them to tackle Olympus Mons,the tallest planetary mountain in the solar system.It's two and a half times the size of Everest!";
	avgdis.innerText = "255 MIL. KM";
	traveltime.innerText = "9 MONTHS";
	planetimg.src = "./assets/destination/image-mars.png";
    planets[1].classList.add('active');
    planets[3].classList.remove('active');
    planets[2].classList.remove('active');
    planets[0].classList.remove('active');
});
planets[2].addEventListener("click", (e) => {
	planetheading.innerText = "EUROPA";
	planetbrief.innerText =
		"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
	avgdis.innerText = "628 MIL. KM";
	traveltime.innerText = "3 YEARS";
	planetimg.src = "./assets/destination/image-europa.png";
    planets[2].classList.add('active');
    planets[3].classList.remove('active');
    planets[0].classList.remove('active');
    planets[1].classList.remove('active');
});
planets[3].addEventListener("click", (e) => {
	planetheading.innerText = "TITAN";
	planetbrief.innerText =
		"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
	avgdis.innerText = "1.6 BIL. KM";
	traveltime.innerText = "7 YEARS";
	planetimg.src = "./assets/destination/image-titan.png";
    planets[3].classList.add('active');
    planets[0].classList.remove('active');
    planets[2].classList.remove('active');
    planets[1].classList.remove('active');
});
