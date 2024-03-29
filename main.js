// let button = document.querySelector('.btn');
// let mmm = document.querySelector('.btn2');
// let quti = document.querySelector(".all")
// let ttt = document.querySelector(".h1")

// button.addEventListener('click', () => {
//     console.log('test');
//     mmm.textContent = 'Dark';
//     quti.classList.add("part2")
//     quti.classList.remove("part")
// });

// mmm.addEventListener('click', () => {
//     console.log('test2');
//     // mmm.textContent = '';
//     quti.classList.remove("part2")
//     quti.classList.add("part")
// });
// ttt.addEventListener("click", () => {
    // ttt.classList.add("text")
//     ttt.classList.add("part2")
//     quti.classList.remove("part")
// });


let pic1 = document.querySelector('.pic1');
let pic2 = document.querySelector('.pic2');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let all = document.querySelector('.all');

btn2.addEventListener('click', () => {
    pic2.classList.remove('hidepic');
    pic1.classList.add('hidepic');
    btn2.classList.add('btnactive');
    btn1.classList.remove('btnactive');
    all.classList.add("part")
    all.classList.remove("part")
});

btn1.addEventListener('click', () => {
    pic1.classList.remove('hidepic');
    pic2.classList.add('hidepic');
    btn1.classList.add('btnactive');
    btn2.classList.remove('btnactive');
    all.classList.add("part")
});