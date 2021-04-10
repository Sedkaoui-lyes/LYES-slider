
    var images =['im01.jpg','im02.jpg','im03.jpg','im04.jpg','im05.jpg']
    var cpt = 0

function change() {
    var img = document.getElementById('img-slider')
    img.setAttribute('src','images/'+ images[cpt])
}
setInterval(()=>{
    change();
    cpt++;
    if(cpt>4)cpt = 0;
},5000)
function previous() {
    cpt--;
    if(cpt < 0) cpt = 4;  
    change() 
}
function next() {
    cpt++;
    if(cpt > 4) cpt = 0;  
    change() 
}