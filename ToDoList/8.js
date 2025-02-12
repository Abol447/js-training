
let data = [];
const add = document.getElementById("add");
const input = document.getElementById("input");
const list = document.getElementById('list');
let id = 0;
let reload = ()=>{
    if(data.length >0)
        for(let i = 0;i<data.length;i++){
            let li  = document.createElement('li');
            li.classList.add('list_item');
            let div = `<div class = "item_text" id="${data[i].id}">` + data[i].description +'</div>';    
            li.innerHTML = div +  svg;
            list.append(li);
        }
}
const jsonFormat = function(key,value){
    return {id:key,description:value};
}
const localstoge ={
    add : function(key,value){
        localStorage.setItem(key,value);
    },
    clear: function(){
        localStorage.clear();  
    },
    remove: function(key){
        localStorage.removeItem(key)
    }
}
let svg = '<svg id="delet" onclick="remove(this)" class="delet" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>' 
const addelement = function(txt){
    let li  = document.createElement('li');
    li.classList.add('list_item');
    let div = `<div class = "item_text" id="${data.length}">` + txt +'</div>';    
    li.innerHTML = div +  svg;
    list.append(li);
    data.push(jsonFormat(data.length,txt));
    localstoge.add('todolist',JSON.stringify(data));
}

const remove =function(itm){
   itm.parentNode.remove();
   let item = itm.previousElementSibling.id;
   let index = 0;
   data.map((x)=>{
    if(x.id ==item)
        {
            data.splice(index,1);
            console.log(data);
        }
        index++;
   })
   localstoge.add('todolist',JSON.stringify(data));
} 
add.addEventListener('click',()=>{
    addelement(input.value)
})

data = JSON.parse(localStorage.getItem('todolist'));
reload();
let d = new Date();
console.log(d);
