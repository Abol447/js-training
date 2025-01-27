const move   = document.getElementById("c");
const static = document.getElementById("p");
const right = document.getElementById("rightbtn");
const left = document.getElementById("leftbtn");
const down = document.getElementById("downbtn");
const up = document.getElementById("upbtn");
let width = 270;
let height = 270;
let w =0 , h = 0;
// while (w != width && h!=height){
//     move.style.left = w + "px";
//     move.style.top = h+"px";
//     w++;
//     h++;
// }
// let body = function(x){
//    document.getElementById("x").style.backgroundColor = "grey"
// }
// let text = function(){
//     document.getElementById("y").style.color = "grey";
// }
// let movment = function(){
//     console.log(1);
//     move.style.backgroundColor = "grey";
// }
// let mouseout = function(){
//     move.style.backgroundColor = "red";
// }
// let mouseclick = function(){
//     move.style.left = "0px";
//     move.style.top = "0px";
//     w=0;
//     h=0;
// }
// let m = function(){
//     while (w != width && h!=height){
//         move.style.left = w + "px";
//         move.style.top = h+"px";
//         w++;
//         h++;
//     }
// }
up.addEventListener("click",function(){
    if(h==0)
        return;
    else 
        h -=30;
    move.style.top = h+"px";
});
down.addEventListener("click",function(){
    if(h==270)
    {
        h=0;
        return;
    }
    else
        h += 30;
    move.style.top = h+"px";
});
left.addEventListener("click",function(){
    if(w==0)
        return;
    else
        w -=30;
    move.style.left = w+"px";
});
right.addEventListener("click",function(){
    if(w==270)
        return;
    else
        w +=30;
    move.style.left = w+"px";
})