let card = document.querySelector('.card')
let button = document.querySelector('button')
let modalCard = document.querySelector('.modalCard')
let modalCard_img = document.querySelector('.modalCard-img')
// modalCard.style.opacity = '0';

function buttonHandler() {
    card.style.transform = 'rotate(180deg)';
    card.style.transition = '2s';
    modalCard.style.opacity = '1';
    modalCard.style.pointerEvents = 'auto';
    modalCard.style.transition = '2s';
}

function offHandler() {
    card.style.transform = 'rotate(0deg)';
    card.style.transition = '2s';
    modalCard.style.opacity = '0'; 
    modalCard.style.pointerEvents = 'none';
    modalCard.style.transition = '2s';
}
