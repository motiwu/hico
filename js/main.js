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