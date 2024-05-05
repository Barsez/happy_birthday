const baloons = document.querySelector('.baloons');
const baloons_img = document.querySelector('.baloons_img');
const push_block = document.querySelector('.push_block');


let arr = ["./img/starod_1.jpg", "./img/starod_2.jpg", "./img/starod_3.jpg", "./img/starod_4.jpg"]

let i = 0;
baloons.addEventListener('click', function() {
    push_block.style.display = 'none';
    baloons_img.src = arr[i];
    i++; 
    if(i >= arr.length) i = 0;
})