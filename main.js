// document.querySelector('div').innerHTML = 'this is div';
// let a = document.querySelector('div').innerHTML;
// console.log(a);
// let ph1 = document.querySelector('.p1');
// // element.style.backgroundColor = '#000';
// element.addEventListener('mouseover', function() {
//     element.style.backgroundColor = '#FFFF';
// });
// element.addEventListener('mouseout', function() {
//     element.style.backgroundColor = '#000';
// });
// let element = document.querySelector('div');
// element.style.backgroundColor = '#000';
// element.addEventListener('mouseover', function() {
//     element.style.backgroundColor = '#FFFF';
// });
// element.addEventListener('mouseout', function() {
//     element.style.backgroundColor = '#000';
// });
const bigm = document.querySelector('.big').src;
let ph = document.querySelectorAll('.p');
let big = document.querySelector('.big');

for (let i = 0; i < ph.length; i++) {
    ph[i].addEventListener('mouseover', function() {
        big.src = ph[i].src;
    });
    ph[i].addEventListener('mouseout', function() {
        big.src = bigm;
    })
}

// ph1.addEventListener('mouseover', function() {
//     big = document.querySelectorAll('.p1');
// })

// let input1 = document.querySelectorAll('.p');
// input1.addEventListener('change', function() {

//         }
//         let output1 = document.querySelectorAll('.p');

//         output1.addEventListener('change', function() {

//             }document.querySelectorAll('.p');