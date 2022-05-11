const choices=document.querySelectorAll('.choice');
let crewimg=document.querySelector('.crewimg');
let crewtag=document.querySelector('.crewtag');
let crewname=document.querySelector('.crewname');
let crewbrief=document.querySelector('.crewbrief');
console.log(choices);
console.log(crewimg);
choices[0].addEventListener('click',(e)=>{
    choices[0].classList.add('current');
    choices[3].classList.remove('current');
    choices[2].classList.remove('current');
    choices[1].classList.remove('current');
    crewimg.src="./assets/crew/image-douglas-hurley.png";
    crewtag.innerText="COMMANDER";
    crewbrief.innerText="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
    crewname.innerText="DOUGLAS HURLEY";
});

choices[1].addEventListener('click',(e)=>{
    choices[1].classList.add('current');
    choices[3].classList.remove('current');
    choices[2].classList.remove('current');
    choices[0].classList.remove('current');
    crewimg.src="./assets/crew/image-mark-shuttleworth.png";
    crewtag.innerText="MISSION SPECIALIST";
    crewbrief.innerText=" Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South  African to travel to space as a space tourist";
    crewname.innerText="MARK SHUTTLEWORTH";
});
choices[2].addEventListener('click',(e)=>{
    choices[2].classList.add('current');
    choices[3].classList.remove('current');
    choices[0].classList.remove('current');
    choices[1].classList.remove('current');
    crewimg.src="./assets/crew/image-victor-glover.png";
    crewtag.innerText="PILOT";
    crewbrief.innerText="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station . Glover is a commander in the U.S. Navy where he pilots F/A-18.He was a crew member of Expediton 64 and served as a station systems flight engineer.";
    crewname.innerText="VICTOR GLOVER";
});
choices[3].addEventListener('click',(e)=>{
    choices[3].classList.add('current');
    choices[0].classList.remove('current');
    choices[2].classList.remove('current');
    choices[1].classList.remove('current');
    crewimg.src="./assets/crew/image-anousheh-ansari.png";
    crewtag.innerText="ENGINEER";
    crewbrief.innerText="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
 
    crewname.innerText="ANOUHSHEH ANSARI";
});