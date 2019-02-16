function openDialog() {
    let dialog = document.getElementById('dialog-route');
    dialog.classList.add('active');
}

function cloasDialog() {
    let dialog = document.getElementById('dialog-route');
    dialog.classList.remove('active');
}



let styles = getComputedStyle(document.documentElement);
let totalSpot = document.querySelectorAll('.slider-wrapper .slider li').length;
console.log(totalSpot);

function gospot(target) {  
    document.documentElement.style.setProperty('--currentSpot', target);
}

function nextspot() {
    let currentSpot = styles.getPropertyValue('--currentSpot');
    if (currentSpot < totalSpot - 1)
        document.documentElement.style.setProperty('--currentSpot', Number(currentSpot) + 1);
}

function prevspot() {
    let currentSpot = styles.getPropertyValue('--currentSpot');
    if (currentSpot > 0)
        document.documentElement.style.setProperty('--currentSpot', Number(currentSpot) - 1);
}