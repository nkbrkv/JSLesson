const btns = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');

let i = 0;

const deleteElement = (event) => {
    console.log(event.currentTarget);
    console.log(event.type);
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);

});


btns.forEach( btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});