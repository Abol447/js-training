const nostatus_titr = document.getElementById('nostatus_titr')
const inprogress_titr  = document.getElementById('inprogress_titr')
const completed_titr = document.getElementById('completed_titr')
const back = document.getElementById("back");
const input_title = document.getElementById("input_title");
const input_discription  =document.getElementById("input_discription");
const btnAdd = document.querySelector('.add');
const exit = document.querySelector('.exit');
const btnsumbit = document.getElementById('btn');
const input = document.getElementById('input');
let spanclass = 1;
let svg = '<svg id="delet" onclick="remove(this)" class="delet" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>' 
const lidroped = (position,txt,id)=>{
    let li = document.createElement('li');
    li.classList.add('item')
    li.classList.add('deletbtn')
    li.id ='nostatus_item';
    li.draggable = true
    let span = document.createElement('span')
    span.classList.add('span')
    span.ariaMultiLine = 'true'
    span.innerHTML = txt;
    span.id = id;
    li.append(span)
    li.innerHTML +=svg;
    position.append(li);
    li.addEventListener('dragstart',(event)=>
        {
            let span = li.querySelector("span");
            event.dataTransfer.setData("span",span.id)
            console.log(event)
    })
}
const licreater = (txt)=>{
    let li = document.createElement('li');
    li.classList.add('item')
    li.classList.add('deletbtn')
    li.id ='nostatus_item';
    li.draggable = true
    let span = document.createElement('span')
    span.classList.add('span')
    span.ariaMultiLine = 'true'
    span.innerHTML = txt;
    span.id =('s'+ spanclass);
    spanclass++;
    li.append(span)
    li.innerHTML +=svg;
    nostatus_titr.append(li);
    li.addEventListener('dragstart',(event)=>
    {
        let span = li.querySelector("span");
        event.dataTransfer.setData("span",span.id)
        console.log(event)
        
    })
}
btnAdd.addEventListener('click',()=>{
    back.classList.toggle('back-color');
    input.classList.add('animation_show');
    input.classList.add('show')
    input.classList.remove('hide')
})
exit.addEventListener('click',()=>{
    back.classList.toggle('back-color');
    input.classList.remove('animation_show');
    input.classList.remove('show')
    input.classList.add('hide')
})
input.addEventListener('submit',(event)=>{
    event.preventDefault();
    licreater(input_title.value)
    input_title.value = ''
    input_discription.value = ''
})
inprogress_titr.addEventListener('dragover',(event)=>{
    event.preventDefault()
})
completed_titr.addEventListener('dragover',(event)=>{
    event.preventDefault();
})
inprogress_titr.addEventListener('drop',(event)=>{
    let id = event.dataTransfer.getData('span');
    let element = document.getElementById(`${id}`)
    lidroped(inprogress_titr,element.innerHTML,id);
})
completed_titr.addEventListener('drop',(event)=>{
    let id = event.dataTransfer.getData('span');
    let element = document.getElementById(`${id}`)
    lidroped(completed_titr,element.innerHTML,id);
})
