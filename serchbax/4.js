const input = document.getElementById("search");
//function{
const clickfunction = (li)=>{
    input.value = li.innerHTML;
    console.log(1);
}
const creatLi = (input)=>{
    let li =  document.createElement("li");
    li.innerHTML=input;
    li.setAttribute("class","list_item")
    ul.append(li);
}
//}
let arreyli = [];
const searchValue= ["abol","amir"];
const form = document.getElementById("form");
const ul = document.getElementById("ul_list");
input.addEventListener("focus",function () {
    form.classList.add("border_red");
})
input.addEventListener("focusout",function(){
    form.classList.remove("border_red");
})
input.addEventListener("input",function(){
    ul.innerHTML="";
    if((Number)(input.value.length)>0)
        {
            form.classList.remove("border_red");
            form.classList.add("border_green");
            for(let i = 0 ; i<searchValue.length ; i++){
                if(searchValue[i].match(input.value))
                    creatLi(searchValue[i]);
            }
        }
    else
        {
            form.classList.add("border_red");
            form.classList.remove("border_green");
        }
    if(ul.innerHTML=="")
        creatLi(input.value);
})