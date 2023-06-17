const ipt = document.getElementById("ipt"),
      btn = document.getElementById("btn"),
      pv = document.getElementById("pview");
let pointed=false,msg=false,clicked=false;
function check(){
    if(pointed==false){
       if(ipt.value){
           btn.style.backgroundColor = "rgb(0,225,115)";
           btn.innerText = "SEND!";
           msg=true;
       }
       else{
            btn.style.backgroundColor = "crimson";
            btn.innerText = "";
            msg=false;
       }
    }
}
btn.addEventListener("mouseenter",function(){
    if(msg){
        btn.style.backgroundColor = "rgb(235,235,235)";
        btn.style.color = "black";
        pointed=true;
    }
})
btn.addEventListener("mouseleave",function(){
    if(!clicked){
        pointed=false;
    }
})

//btn.addEventListener("mouseup",aaa())

let knew;
btn.addEventListener("mousedown",function(){
    if(pointed){
        clicked=true;
        //knew = document.createElement(`div`);
        
        
        //back to normal button
        btn.style.backgroundColor = "yellow"
        pv.innerText = ipt.value;
        pv.style.top = "-666px";
        //end of backing
    }
})
window.addEventListener("mousemove",function(info){
    if(clicked){
        pv.style.top=info.pageY + "px";
        pv.style.left = info.pageX + "px";
    }
})
window.addEventListener("mouseup",function(info){
    if(clicked){
        pointed=false;
        pv.innerText= "";
        knew = document.createElement("div");
        knew.style.position = "absolute";
        knew.style.left = info.clientX + "px";
        knew.style.top = info.clientY + "px";
        knew.style.fontSize = "30px";
        knew.innerText = ipt.value;
        document.body.appendChild(knew);
        clicked=false;
        ipt.value="";
        //
        btn.style.backgroundColor = "crimson";
        btn.innerText = "";
        msg=false;
        //
    }
})
//console.log(info.buttons);
setInterval(check,100);