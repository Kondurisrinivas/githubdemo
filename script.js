document.title='DOM Manipulation';
var headerTitle=document.getElementById('header-title');
headerTitle.textContent='hello';
headerTitle.innerText='Hey';
headerTitle.innerHTML='<h3> Heading </h3>';
var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';

// var tit=document.getElementsByClassName('list-group-item');
// tit[2].style.backgroundColor='green'

// var lis=document.getElementsByClassName('list-group-item');
// for(var i=0;i<lis.length;i++){
//     lis[i].style.fontWeight='bold';
// }

// var tit=document.getElementsByTagName('li');
// tit[2].style.backgroundColor='green'

// var lis=document.getElementsByTagName('li');
// for(var i=0;i<lis.length;i++){
//     lis[i].style.fontWeight='bold';
// }

// Select the second item and change its background color
// var secondItem = document.querySelector("#items li:nth-child(2)");
// secondItem.style.backgroundColor = "green";

// // Select the third item and make it invisible
// var thirdItem = document.querySelector("#items li:nth-child(3)");
// thirdItem.style.display = "none";
// console.log(thirdItem);
// Select all items in the item list

var items = document.querySelectorAll("#items li");
// Change the font color to green for the second item
items[1].style.color = "green";
// Select all items in the item list
var items = document.querySelectorAll("#items li:nth-child(odd)");
// Loop through the items and set the background color to green for odd elements
for (var i = 0; i < items.length; i++) {
//   if (i % 2 === 0) {
    items[i].style.backgroundColor = "green";
//   }
}