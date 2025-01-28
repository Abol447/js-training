const fm = document.getElementById("fm");
const fp = document.getElementById("fp");
const sm = document.getElementById("sm");
const sp = document.getElementById("sp");
const tm = document.getElementById("tm");
const tp = document.getElementById("tp");
const first = document.getElementById("first__span");
const second = document.getElementById("second__span");
const third = document.getElementById("third__span");
fp.addEventListener("click",()=>{
    first.style.display="block";
    fp.style.display = "none";
    fm.style.display = "block";
})
fm.addEventListener("click",()=>{
    first.style.display="none";
    fm.style.display = "none";
    fp.style.display = "block";
})
sp.addEventListener("click",()=>{
    second.style.display="block";
    sp.style.display = "none";
    sm.style.display = "block";
})
sm.addEventListener("click",()=>{
    second.style.display="none";
    sm.style.display = "none";
    sp.style.display = "block";
})
tp.addEventListener("click",()=>{
    third.style.display="block";
    tp.style.display = "none";
    tm.style.display = "block";
})
tm.addEventListener("click",()=>{
    third.style.display="none";
    tm.style.display = "none";
    tp.style.display = "block";
})