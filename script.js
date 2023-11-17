$(document).ready(function () {
    $('.js-example-basic-multiple').select2();
});

let selected = [];

$(document).ready(function() {
    $('.js-example-basic-multiple').on('change', function() {
        selected = $(this).val();
        if (selected.includes('all')) {
            selected = $(this).children('option:not(:first)').map(function() {
                return this.value;
            }).get();
        }
        console.log(selected);
    });
});

document.getElementById('start').addEventListener('click', function () {
    if (selected.length > 0) {
        let randomIndex = Math.floor(Math.random() * selected.length);
        let result = selected[randomIndex];
        chosen.innerHTML = result;
    } 
});

