// alert(31);
// console.log(3152);

const boxOne = document.querySelector('.box-one');
const boxTwo = document.querySelector('.box-two');


boxOne.addEventListener('mouseenter', () => {
    boxOne.classList.add('show');
});
boxOne.addEventListener('mouseleave', () => {
    boxOne.classList.remove('show');
});

boxTwo.addEventListener('mouseenter', () => {
    boxTwo.classList.add('show');
});
boxTwo.addEventListener('mouseleave', () => {
    boxTwo.classList.remove('show');
});

