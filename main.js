
let btn = document.getElementById("btn");
btn.onclick = function(){
    let x = confirm("Are you sure you want to delete?");
    if(x){
        const item = document.getElementById("item");
        item.style.display = "none";
        return x;
    }
}