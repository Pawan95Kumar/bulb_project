let a=document.getElementsByTagName("img")[0];
let b= document.getElementById("bulb");
a.addEventListener("click",function(){
    if(a.textContent.includes("on")){
        b.src="bulbon.png";
        a.textContent="Turn off";
    }else{
        b.src="bulboff.png";
        a.textContent="Turn on"
    }
})