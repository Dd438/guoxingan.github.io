var homepage = document.getElementById("homepage");
var manuscript = document.getElementById("manuscript");
var conment1 = document.getElementById("conment1");
var appeal = document.getElementById("appeal");
var conment2 = document.getElementById("conment2");
var inform = document.getElementById("inform");
var li1 = document.getElementsByClassName("li1");
var li2 = document.getElementsByClassName("li2");
var firstlist = document.getElementById("firstlist");
var secondlist = document.getElementById("secondlist");
var showdata = document.getElementById("showdata");
var screenimg = document.getElementsByClassName("screenimg");
var screen =document.getElementById("screen");
var eicolist = document.querySelector(".icolist");
var left = 0;
var timer;
run();
function run(){
    if(left <=-2915){
        left = 0;
    }
    screen.style.marginLeft = left + 'px';
    var n = (left % 583 == 0)? n = 1200 : n = 11;
    left -= 11;
    timer = setTimeout(run,n);
}
function imgchange(n){
    let lt = - (n * 583);
    screen.style.marginLeft = lt + 'px';
    left = lt;
}
function icochange(m){
    for(let index = 0;index < esico.length;index++){
        esico[index].style.backgroundColor = '';    
    }
    if(m < esico.length){
        esico[m].style.backgroundColor = 'red';
    }
}
eicolist.onclick = function(){
    var tg = event.target;
    let ico = tg.innerHTML - 1;
    imgchange(ico);
    icochange(ico);
}
screen.onmouseover = function(){
    clearTimeout(timer);
}
screen.onmouseout = function(){
    run();
}
li1[0].onclick = function(){
    homepage.style.display = "block";
    manuscript.style.display = "none";
    conment1.style.display = "none";
    appeal.style.display = "none";
    conment2.style.display = "none";
    inform.style.display = "none";
}
li1[1].onmouseover = function(){
    firstlist.style.display = "block";
}
li1[1].onmouseout = function(){
    firstlist.style.display = "none";
}
li1[3].onmouseover = function(){
    secondlist.style.display = "block";
}
li1[3].onmouseout = function(){
    secondlist.style.display = "none";
}
li2[0].onclick = function(){
    homepage.style.display = "none";
    manuscript.style.display = "block";
    conment1.style.display = "none";
    appeal.style.display = "none";
    conment2.style.display = "none";
    inform.style.display = "none";
    
}
li2[1].onclick = function(){
    homepage.style.display = "none";
    manuscript.style.display = "none";
    conment1.style.display = "block";
    appeal.style.display = "none";
    conment2.style.display = "none";
    inform.style.display = "none";
    
}
li2[2].onclick = function(){
    homepage.style.display = "none";
    manuscript.style.display = "none";
    conment1.style.display = "none";
    appeal.style.display = "block";
    conment2.style.display = "none";
    inform.style.display = "none";
    
}
li2[3].onclick = function(){
    homepage.style.display = "none";
    manuscript.style.display = "none";
    conment1.style.display = "none";
    appeal.style.display = "none";
    conment2.style.display = "block";
    inform.style.display = "none";
}
li2[4].onclick = function(){
    homepage.style.display = "none";
    manuscript.style.display = "none";
    conment1.style.display = "none";
    appeal.style.display = "none";
    conment2.style.display = "none";
    inform.style.display = "block";
}
var title = document.getElementsByClassName("title");
showdata.onclick = function(){
    if(data.style.display === 'none'){
        data.style.display = "block";      
    }
    else if(data.style.display != 'none')       
        data.style.display = "none";        
}
showdata.onmouseover = function(){
    data.style.display = "block";
    title[0].style.color = "blue";
}
showdata.onmouseout = function(){
    if(data.style.display != 'none'){
        title[0].style.color = "blue";
    }
    else title[0].style.color = "black";
}
