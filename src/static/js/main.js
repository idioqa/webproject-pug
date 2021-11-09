document.addEventListener('DOMContentLoaded', function() {
    console.log('js is working');
    
    let slideIndex = 0;
    const showSlides = function() {
        console.log('slide' + slideIndex);
        let slides = document.getElementsByClassName('js-slide');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 5000);       
    }

    const signUpBtn = document.querySelector(".js-sign_up");
    const modalBg = document.querySelector('.js-modal-bckg');
    const modalWindow = document.querySelector('.modal');

    signUpBtn.addEventListener("click", function() {
        modalBg.style.display = 'block';
        modalWindow.style.display = 'block';
    })

    function hideModals() {
        modalBg.style.display = '';
        modalWindow.style.display = '';
    }

    modalBg.addEventListener('click', (e) => {
        e.stopPropagation();
        const elem = document.querySelector('.js-modal');
        if(!elem.contains(e.target)) {
            hideModals();
        }
    })

    showSlides();
 });


