//function{
const creatLi = (input)=>{
    let li =  document.createElement("li");
    li.innerHTML=input;
    li.setAttribute("class","list_item")
    ul.append(li);
}
//}
const searchValue= ["abol","amir"];
const form = document.getElementById("form");
const input = document.getElementById("search");
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
})