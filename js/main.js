function toggleMarks(type) {
    let marks = [
        document.getElementById('marks-heart'),
        document.getElementById('marks-nite'),
        document.getElementById('marks-exp'),
        document.getElementById('marks-info'),
    ];
    
    
    let text;
    switch(type) {
        case 'heart':
            text = '心心相印鳥巢造型裝置展示品';
            break;
        case 'nite':
            text = '點亮湖本燈光裝置展示品';
            break;
        case 'exp':
            text = '遊程體驗';
            break;
        case 'info':
            text = '資訊站';
    }
    document.getElementById('map-title').innerHTML = text;

    marks.forEach(mark => {
        mark.classList.remove('active');
    });
    document.getElementById('marks-' + type).classList.add('active');
}


//page-route

function openDialog(type, code) {
    let dialog = document.getElementById('dialog-' + type + '-' +  code);
    if (type === 'route') {
        dialog.getElementsByTagName('img')[0].src = 'images/route/route-' + code +'.png';
    }
    dialog.classList.add('active');
}

function closeDialog(type, code) {
    let dialog = document.getElementById('dialog-' + type + '-' +  code);
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


const mapCodes = [11, 12, 13, 14, 21, 22, 23, 24, 31, 32, 33, 34, 35, 36, 37];

function maptrans() {
    document.getElementById('page-map').classList.add('trans');
}

function maptransClose() {
    document.getElementById('page-map').classList.remove('trans');
}

function mapmark(code) {
    maptrans();
    mapCodes.forEach(mt => {
        if(document.getElementById('detail-' + mt)) {
            document.getElementById('detail-' + mt).classList.remove('active');
        }
    });
    document.getElementById('detail-' + code).classList.add('active');
}

function mapmarkRemove() {
    maptransClose();
    mapCodes.forEach(mt => {
        if(document.getElementById('detail-' + mt)) {
            document.getElementById('detail-' + mt).classList.remove('active');
        }
    });
}




// audio

function toggleAudio() {
    
    let audio = document.getElementById('audio-background');
    let btn = document.getElementById('btn-audio');
    if(audio.paused) {
        audio.play();
        btn.classList.add('active');
    } else {
        audio.pause();
        btn.classList.remove('active');
    }
}