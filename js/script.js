function openPluses () {
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
}
openPluses();

function editValueProfitSliders () {
    let sliders = document.querySelectorAll('.profit__slider'),
        outputs = document.querySelectorAll('.profit__block_value');

        for (let i = 0; i < sliders.length; i++) {
        }
        for (let i = 0; i < outputs.length; i++) {
            outputs[0].innerHTML = sliders[0].value + ' €';
            outputs[1].innerHTML = sliders[1].value + ' контейнера'; 
            if (sliders[1].value == 1) {
                outputs[1].innerHTML = sliders[1].value + ' контейнер';
            } else if (sliders[1].value > 4) {
                outputs[1].innerHTML = sliders[1].value + ' контейнеров';
            }
            outputs[2].innerHTML = sliders[2].value + ' %'; 
        }
}
editValueProfitSliders();