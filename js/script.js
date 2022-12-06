let questionPluses = document.querySelectorAll('.questions__plus'),
    questionDescr = document.querySelectorAll('.questions__descr'),
    questionSubtitle = document.querySelectorAll('.questions__subtitle');

for (let i = 0; i < questionPluses.length; i++) {
    questionPluses[i].addEventListener('click', function(e) {
        e.preventDefault();
        questionDescr[i].classList.toggle('questions__descr_dBlock');
        questionPluses[i].classList.toggle('questions__plus_dBlock');
        questionSubtitle[i].classList.toggle('questions__subtitle_dBlock');
    })
}
