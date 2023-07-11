document.title='DOM Manipulation';
var headerTitle=document.getElementById('header-title');
headerTitle.textContent='hello';
headerTitle.innerText='Hey';
headerTitle.innerHTML='<h3> Heading </h3>';
var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';



var tit=document.querySelectorAll('.list-group-item');
tit[2].style.backgroundColor='green'

var lis=document.querySelectorAll('.list-group-item');
console.log(lis)
for(var i=0;i<lis.length;i++){
    lis[i].style.fontWeight='bold';
}