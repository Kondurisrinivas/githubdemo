document.title='DOM Manipulation';
var headerTitle=document.getElementById('header-title');
headerTitle.textContent='hello';
headerTitle.innerText='Hey';
headerTitle.innerHTML='<h3> Heading </h3>';
var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';

var tit=document.querySelector('.title');
tit.style.fontWeight='bold';
tit.style.color='green';
