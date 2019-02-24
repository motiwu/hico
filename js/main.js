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


//page-route

function openDialog(i) {
    let dialog = document.getElementById('dialog-route-' + i);
    dialog.getElementsByTagName('img')[0].src = 'images/route/route-' + i +'.png';
    dialog.classList.add('active');
}

function closeDialog(i) {
    let dialog = document.getElementById('dialog-route-' + i);
    dialog.classList.remove('active');
}


// page-spot

let styles = getComputedStyle(document.documentElement);
let totalSpot = document.querySelectorAll('#page-spots .slider-wrapper .slider li').length;

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


// page-event

let totalEvent = document.querySelectorAll('#page-event .slider-wrapper .slider li').length;

function goevent(target) {
    document.documentElement.style.setProperty('--currentEvent', target);
}

function nextevent() {
    let currentEvent = styles.getPropertyValue('--currentEvent');
    if (currentEvent < totalEvent - 1)
        document.documentElement.style.setProperty('--currentEvent', Number(currentEvent) + 1);
}

function prevevent() {
    let currentEvent = styles.getPropertyValue('--currentEvent');
    if (currentEvent > 0)
        document.documentElement.style.setProperty('--currentEvent', Number(currentEvent) - 1);
}



// page-map


const mapTypes = ['heart', 'nite'];

function maptrans() {
    document.getElementById('page-map').classList.add('trans');
}

function maptransClose() {
    document.getElementById('page-map').classList.remove('trans');
}

function mapmark(type) {
    maptrans();
    document.getElementById('detail-' + type).classList.add('active');
}

function mapmarkRemove() {
    maptransClose();
    mapTypes.forEach(mt => {
        if(document.getElementById('detail-' + mt)) {
            document.getElementById('detail-' + mt).classList.remove('active');
        }
    });
}
