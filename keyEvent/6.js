const input = document.querySelector("#input");
const raper = document.querySelector(".raper");
const eventKey = document.querySelector("#event_key");
const eventLocatin = document.querySelector("#event_locatin");
const eventWitch = document.querySelector("#event_witch");
const eventCode = document.querySelector("#event_code");
const number = document.querySelector("#main_number");
input.addEventListener("keydown",(event)=>{
    input.classList.toggle("hide")
    number.innerHTML = `${event.which}`
    eventKey.innerHTML = `${event.key}`
    eventLocatin.innerHTML = `${event.location}`
    eventWitch.innerHTML = `${event.which}`
    eventCode.innerHTML = `${event.code}`
})