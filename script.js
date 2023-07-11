document.title='DOM Manipulation';
var headerTitle=document.getElementById('header-title');
headerTitle.textContent='hello';
headerTitle.innerText='Hey';
headerTitle.innerHTML='<h3> Heading </h3>';
var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';



var tit=document.getElementsByClassName('list-group-item');
tit[2].style.backgroundColor='green'

var lis=document.getElementsByClassName('list-group-item');
for(var i=0;i<lis.length;i++){
    lis[i].style.fontWeight='bold';
}

var tit=document.getElementsByTagName('li');
tit[2].style.backgroundColor='green'

var lis=document.getElementsByTagName('li');
for(var i=0;i<lis.length;i++){
    lis[i].style.fontWeight='bold';
}