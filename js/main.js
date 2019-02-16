function toggleMarks(type) {
    let marks = [
        document.getElementById('marks-heart'),
        document.getElementById('marks-nite'),
        // document.getElementById('marks-expo'),
        document.getElementById('marks-info'),
    ];

    marks.forEach(mark => {
        mark.classList.remove('active');
    });
    document.getElementById('marks-' + type).classList.add('active');
}



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