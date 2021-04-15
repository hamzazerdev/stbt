let slider=document.getElementById('slider');
let outputb=document.getElementById('outputb');
let outputs=document.getElementById('outputs');


outputb.innerHTML="$"+slider.value+".00";
outputs.innerHTML="$"+slider.value+".00";

slider.oninput=function(){
    outputb.innerHTML="$"+this.value+".00";
    outputs.innerHTML="$"+this.value+".00";
}


