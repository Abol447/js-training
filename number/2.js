const number  =document.getElementById("number");
const add = document.getElementById("btnAdd");
const reset = document.getElementById("btnReset");
const lose = document.getElementById("btvLose");
let x = (Number)(number.innerHTML);
add.addEventListener("click", ()=>{
    x++;
    number.innerHTML = x;
});
add.addEventListener("mouseover",()=>{
    add.style.boxShadow = "0px 0px 10px grey";
})
add.addEventListener("mouseleave",()=>{
    add.style.boxShadow = "none"
})
lose.addEventListener("mouseover",()=>{
    lose.style.boxShadow = "0px 0px 10px grey";
})
lose.addEventListener("mouseleave",()=>{
    lose.style.boxShadow = "none"
})
reset.addEventListener("mouseover",()=>{
    reset.style.boxShadow = "0px 0px 10px grey";
})
reset.addEventListener("mouseleave",()=>{
    reset.style.boxShadow = "none"
})
reset.addEventListener("click", ()=>{
    x = 0;
    number.innerHTML = x;
});
lose.addEventListener("click", ()=>{
    x --;
    number.innerHTML = x;
});