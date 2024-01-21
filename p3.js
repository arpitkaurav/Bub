var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");
var home = document.querySelector("body");
var flag=0;

btn.addEventListener("click",function(){
    if(flag===0){
    bulb.style.backgroundColor="yellow";
    home.style.backgroundColor="white";
    btn.innerHTML="OFF"
    flag=1
    }else{
    bulb.style.backgroundColor="white";
    home.style.backgroundColor="black";
    btn.innerHTML="ON"
    flag=0
    }
})