const choices=document.querySelectorAll('.choice');
let techname=document.querySelector('.technology-name')
let techbrief=document.querySelector('.technology-brief')
let techimg=document.querySelector('.technology-img')
console.log(choices);
choices[0].addEventListener('click',(e)=>{
    choices[0].classList.add('current');
    choices[1].classList.remove('current');
    choices[2].classList.remove('current');
    techname.innerText="LAUNCH VEHICLE";
    techbrief.innerText="A launch vehicle or carrier rocket is a rocket-propelledvehicle used to carry a payload from Earth's surface tospace, usually to Earth orbit or beyond. Our WEB-Xcarrier rocket is the most powerful in operation.Standing 150 metres tall, it's quite an awe-inspiringsight on the launch pad!";
    techimg.src="./assets/technology/image-launch-vehicle-portrait.jpg"

});
choices[1].addEventListener('click',(e)=>{
    choices[1].classList.add('current');
    choices[0].classList.remove('current');
    choices[2].classList.remove('current');
    techname.innerText="SPACE CAPSULE";
    techbrief.innerText="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    techimg.src="./assets/technology/image-space-capsule-portrait.jpg"
});
choices[2].addEventListener('click',(e)=>{
    choices[2].classList.add('current');
    choices[1].classList.remove('current');
    choices[0].classList.remove('current');
    techname.innerText="SPACEPORT";
    techbrief.innerText="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launc";
    techimg.src="./assets/technology/image-spaceport-portrait.jpg"
});