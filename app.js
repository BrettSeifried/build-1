// import functions and grab DOM elements
const dogInp = document.getElementById('dogInput');
const catInp = document.getElementById('catInput');
const dogNam = document.getElementById('dogName');
const catNam = document.getElementById('catName');
const dogBtn = document.getElementById('generate');
const catBtn = document.getElementById('catSubmit');
const dogNap = document.getElementById('dogNaps');
const catNap = document.getElementById('catNaps');

// initialize global state

// set event listeners 
dogBtn.addEventListener('click', () => {
    let dogNew = dogInp.value;
    dogNam.textContent = dogNew;
    let dogNapping = Math.ceil(Math.random() * 10);
    dogNap.textContent = dogNapping;

});

catBtn.addEventListener('click', () => {
    let catNew = catInp.value;
    catNam.textContent = catNew;
    let catNapping = Math.ceil(Math.random() * 10);
    catNap.textContent = catNapping;
});


// get user input
// use user input to update state 
// update DOM to reflect the new state

