const btnPrev = document.getElementById('scPrev'),
	btnNext = document.getElementById('scNext'),
	slider = document.getElementById('sliderLine'),
	slides = document.querySelectorAll('.sliderLine_item'),
	pagBtn = document.querySelectorAll('.pagBtn'),
	pagBtns = document.getElementById('pagBtns');

let item = 0;
let margin = window.getComputedStyle(slides[item]).getPropertyValue('margin-right');
let slideWidth = slides[item].clientWidth + parseFloat(margin);
// console.log(margin + '/' + slideWidth);


function moveSlider(item) {
	slider.style.transform = `translateX(${-1 * item * slideWidth}px)`;
	pagBtn.forEach(btn => {
		btn.classList.remove('active');
		btn.disabled = false;
	});
	pagBtn[item].classList.add('active');
	pagBtn[item].disabled = true;

	if (item >= slides.length - 1) {
		btnNext.disabled = true;
	} else {
		btnNext.disabled = false;
	}

	if (item <= 0) {
		btnPrev.disabled = true;
	} else {
		btnPrev.disabled = false;
	}
}

function moveNext() {
	item++;
	if (item > slides.length - 1) {
		item = slides.length - 1;
	}

	moveSlider(item);
}

function movePrev() {
	item--;
	if (item < 0) {
		item = 0;
	}

	moveSlider(item);
}

btnNext.addEventListener('click', moveNext);
btnPrev.addEventListener('click', movePrev);

pagBtns.addEventListener('click', function (e) {
	item = e.target.dataset.indx - 1;
	moveSlider(item);
});