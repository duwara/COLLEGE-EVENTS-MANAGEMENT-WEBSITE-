function big(img,text){
    document.querySelector('.big').src= img;
    var v=document.getElementById("con");
    v.innerText=text;
}  
function path(color){
     const path=document.querySelector('.path');
     path.style.background = color;
}
function bg(background){
     const bg=document.querySelector('.container');
     bg.style.background = background;
 }