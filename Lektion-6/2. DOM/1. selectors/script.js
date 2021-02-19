/* 
    DOM - Document Object Model
*/

// console.log(window)

// Det första jag vill göra är att skapa referenser till mina html element
let p1 = document.getElementsByTagName('p');
// console.log(p1);

let p2 = document.getElementsByClassName('paragraph');
// console.log(p2);

let p3 = document.getElementById('para');
// console.log(p3);


// med query selector

let q1 = document.querySelector('p');
// console.log(q1);

let q2 = document.querySelector('.paragraph');
// console.log(q2);

let q3 = document.querySelector('#para');
// console.log(q3);

let q4 = document.querySelector('div.paragraph');
// console.log(q4);

let q5 = document.querySelectorAll('p');
// console.log(q5);



// p1.forEach(node => {
//   console.log(node)
// });

// for(let i = 0; i < p1.length; i++) {    //Get Element get oss en html-collection som vi inte kan köra array metoder på
//   console.log(p1[i]);
// }

// q5.forEach(node => {        // QuerySelector ger oss en node list som vi kan köra array metoder på
//   console.log(node)
// });


let list = document.querySelector('#list');

// console.log(list.parentNode);
// console.log(list.childNodes);
// console.log(list.children);
// console.log(list.children[0]);
// console.log(list.nextSibling);
// console.log(list.nextElementSibling);
// console.log(list.previousSibling);
// console.log(list.previousElementSibling);