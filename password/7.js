const hide = document.getElementById("hide_svg");
const visible = document.getElementById("visible_svg");
const input = document.getElementById("input");
let pass =[];
input.addEventListener('keyup',function(event){
    if(visible.classList.contains('hide')){
        hide.classList.toggle('hide');   
        visible.classList.toggle('hide');
    }
    if(event.target.value.length == 0)
        pass = [];
    if(event.key == 'Backspace')
        pass.pop()
    else
    {
    pass.push(event.key)
    input.value = '';
    for(let i =0;i<pass.length;i++)
        input.value += '*'
    }
})

visible.addEventListener('click',()=>{
    visible.classList.toggle('hide');
    hide.classList.toggle('hide');
    input.value = '';
    pass.forEach(function(item){
        input.value += item
    })
})
hide.addEventListener('click',()=>{
    hide.classList.toggle('hide');   
    visible.classList.toggle('hide');
    input.value = '';
    for(let i =0;i<pass.length;i++)
        input.value += '*'
})