const option  = ["iran","italy","qatar","japan"];
const variable = {
    "iran":[20000,51212,40000,700000,6600],
    "italy":[20000,470000,780000,700000,665100],
    "qatar":[209000,4580000,70001500,66500],
    "japan":[205000,40000,70000540,66005156],
};
const key = document.getElementById("key_select");
const item = document.getElementById("item_select");
const optCreater = function(id){
    let opt = document.createElement("option");
    opt.innerHTML = id;
    item.append(opt);
};
const arreyItem = (arr)=>{
    for( let i = 0 ;i<arr.length;i++)
        optCreater(arr[i]);
}
let index = key.selectedIndex;
arreyItem(variable[option[index]]);
key.addEventListener("change",()=>{
    index = key.selectedIndex;
    item.innerHTML = "";
    arreyItem(variable[option[index]]);
})