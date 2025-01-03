window.addEventListener('scroll', function() {
    var kategorije = document.querySelectorAll('.kategorija');
    
    kategorije.forEach(function(kategorija) {
        if (isInViewport(kategorija)) {
            kategorija.classList.add('show');
        }
    });
});

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

window.onload = function() {
    // Aktiviraj sve kategorije pri učitavanju stranice
    var kategorije = document.querySelectorAll('.kategorija');
    kategorije.forEach(function(kategorija) {
        kategorija.classList.add('fadeIn');
    });

    // Postavi inicijalne postotke za progresne barove nakon učitavanja
    setTimeout(function() {
        updateProgressBar('katA', 70);  // Kategorija A
        updateProgressBar('katB', 50);  // Kategorija B
        updateProgressBar('katC', 90);  // Kategorija C
        updateProgressBar('prvaPomoc', 30);  // Kategorija Prva pomoć
    }, 500);  // Ovdje se može dodati odgoda za učitavanje i animacije
};

function updateProgressBar(categoryId, percentage) {
    var bar = document.querySelector(`#${categoryId} .progress-bar`);
    var text = document.querySelector(`#${categoryId} .progress-text`);
    bar.style.width = percentage + "%";
    text.textContent = percentage + "%";
}
