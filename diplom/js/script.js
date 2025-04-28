//==================БУРГЕР==================//

const burger = document.querySelector('.header__top')

burger.addEventListener('click', () => {
	burger.classList.toggle('open')
})

//==================СЛАЙДЕР==================//
const swiper_thumbnail = new Swiper('.swiper__thumbnail', {
	loop: true,
	slidesPerView: 1,
	initialSlide: 1,
	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev',
	},
	allowTouchMove: false,
	spaceBetween: 44,

	breakpoints: {
		800: {
			slidesPerView: 3,
		},
		600: {
			slidesPerView: 2,
		},
	},
})
const swiper = new Swiper('.swiper__main', {
	loop: true,
	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev',
	},
	allowTouchMove: false,
})
