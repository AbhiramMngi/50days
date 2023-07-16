const progress = document.querySelector('.progress');
const circles = document.querySelectorAll('.circle');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let activeElement = 1
next.addEventListener('click', () => {
    console.log('in next click')
    activeElement = Math.min(++activeElement, circles.length);
    console.log('active element', activeElement);
    update();

});

const update = () => {
    circles.forEach((circle, index) => {
        if (index < activeElement) {
            circle.classList.add('active');
        }
        else {
            circle.classList.remove('active');
        }
    })

    progress.style.width = (((activeElement - 1) / (circles.length - 1)) * 100 )+ '%';
    console.log(progress.style.width);
    
    if (activeElement == 1) prev.disabled = true;
    if (activeElement == circles.length) { console.log('hi', next); next.disabled = true;}
    if (1 < activeElement && activeElement < circles.length) {
        prev.disabled = false;
        next.disabled = false;
    }
}

prev.addEventListener('click', () => {
    activeElement = Math.max(--activeElement, 1);
    update();
})