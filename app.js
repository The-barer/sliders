const slides = document.querySelectorAll('.slide');

slides.forEach( (slide) => {
    slide.addEventListener('click',() => {
    if(!slide.classList.contains('active')) {
        clearActive();
        slide.classList.add('active'); 
        return
    } 
    clearActive();
    }
    ) } 
)

function clearActive() {
    slides.forEach(
        (slide) => {
            slide.classList.remove('active')
        }
    )
}