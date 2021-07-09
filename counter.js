console.log('Hello');

let increment = document.querySelector('#counter');
let lowerCount = document.querySelector('.lower-count');
let addCount = document.querySelector('.add-count');

let counter = 0;

// Functions declarations
function incrementer() {
    if (counter != '50') {
        
        counter++;
        increment.innerText = counter;
    }
}

function decrementer() {

    if (counter != '0') {
        counter--;
        increment.innerText = counter;
    }

}

addCount.addEventListener('click', incrementer);
lowerCount.addEventListener('click', decrementer);