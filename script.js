let counter = 1;

document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 8000)

function nextImage(){
    counter++;
    if(counter > 3){
    counter=1;

}

document.getElementById("radio"+counter).checked = true;

}