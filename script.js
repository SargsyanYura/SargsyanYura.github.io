"use strict"

var mybutton = document.getElementById("btn")

window.onscroll = function scrool(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        mybutton.style.display = "block"
    }else{
        mybutton.style.display = "none"
    }
}
function topfun(){
    document.body.scrollTop = 0;  
    document.documentElement.scrollTop = 0;
}