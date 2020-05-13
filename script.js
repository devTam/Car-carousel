// ==== SELECTIONS ====
const list = document.querySelector('.carousel__list');
const slidesArray = Array.from(list.children);
const nextBtn = document.querySelector('.carousel__btn--right');
const prevBtn = document.querySelector('.carousel__btn--left');
const navContainer = document.querySelector('.carousel__nav');
const navArray = Array.from(navContainer.children);


// === ARRANGING SLIDES NEXT TO EACH OTHER BY SETTING LEFT PROP
const slideWidth = slidesArray[0].getBoundingClientRect().width;

// arrange slides next to each other
// slidesArray[0].style.left = slideWidth * 0 + 'px';
// slidesArray[1].style.left = slideWidth * 1 + 'px';
// slidesArray[2].style.left = slideWidth * 2 + 'px';
slidesArray.forEach((slide, i) => {
    slide.style.left = slideWidth * i + 'px';
});

// === FUNCTIONS ===

function moveToSlide(currentSlide, targetSlide) {
    list.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');

}

function updateNav (currentNav, targetNav) {
    currentNav.classList.remove('carousel__nav-btn--current');
    targetNav.classList.add('carousel__nav-btn--current');

}

function hideBtn(targetIndex) {
    if(targetIndex === 0) {
        prevBtn.classList.add('hide');
        nextBtn.classList.remove('hide');
    }else if(targetIndex === slidesArray.length - 1) {
        prevBtn.classList.remove('hide');
        nextBtn.classList.add('hide');
    }else {
        prevBtn.classList.remove('hide');
        nextBtn.classList.remove('hide');
    }

}

// // === EVENTS ===

// // when nextBtn is clicked move to next slide

nextBtn.addEventListener('click', () => {
    const currentSlide = list.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(currentSlide, nextSlide);

    // Update nav
    const currentNav = navContainer.querySelector('.carousel__nav-btn--current');
    const nextNav = currentNav.nextElementSibling;
    updateNav(currentNav, nextNav);

    const targetIndex = slidesArray.findIndex(slide => slide === nextSlide);
    hideBtn(targetIndex);
    

});

// // when prevBtn is clicked move to prev slide
prevBtn.addEventListener('click', () => {
    const currentSlide = list.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(currentSlide, prevSlide);

    const currentNav = navContainer.querySelector('.carousel__nav-btn--current');
    prevNav = currentNav.previousElementSibling;
    updateNav(currentNav, prevNav);

    const targetIndex = slidesArray.findIndex(slide => slide === prevSlide);
    hideBtn(targetIndex);

});

// //when navBtn is clicked move to target slide
navContainer.addEventListener('click', (e) => {
    const targetNav = e.target.closest('button');
    const currentNav = document.querySelector('.carousel__nav-btn--current');
    const currentSlide = list.querySelector('.current-slide');
    const targetIndex = navArray.findIndex(nav => nav === targetNav);
    const targetSlide = slidesArray[targetIndex];

    moveToSlide(currentSlide, targetSlide);
    updateNav(currentNav, targetNav);
    hideBtn(targetIndex);
    
});




