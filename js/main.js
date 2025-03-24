const element = document.getElementById('my-select')
const choices = new Choices(element, {
	searchEnabled: false,
	itemSelectText: '',
})

const swiper = new Swiper('.swiper1', {
	loop: true,
	speed: 900,
	spaceBetween: 20,
	containerModifierClass: 'banner-swiper',
	watchOverflow: false,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		bulletClass: 'banner__pagination-bullet',
		bulletActiveClass: 'banner__pagination-bullet--active',
	},
})

const swiper2 = new Swiper('.swiper2', {
	slidesPerView: 1.5,
	slidesPerGroup: 1,
	spaceBetween: 25,
	loop: false,
	speed: 650,

	navigation: {
		nextEl: '.business__next',
		prevEl: '.business__prev',
	},
	pagination: {
		el: '.business__pagination',
		bulletClass: 'business__pagination-bullet',
		bulletActiveClass: 'business__pagination-bullet--active',
		clickable: true,
	},

	breakpoints: {
		0: {
			slidesPerView: 1.5,
		},
		768: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
		},
	},
})

let hasChanged1 = false

swiper2.on('slideChange', () => {
	if (window.innerWidth <= 768 && !hasChanged1) {
		hasChanged1 = true
		swiper2.params.centeredSlides = true
		swiper2.params.initialSlide = swiper2.activeIndex
		swiper2.update()
	}
})

const swiper3 = new Swiper('.swiper3', {
	slidesPerView: 1.5,
	spaceBetween: 25,
	speed: 700,
	breakpoints: {
		768: { slidesPerView: 2, spaceBetween: 25 },
		1200: { slidesPerView: 3, spaceBetween: 25 },
	},
})

const swiper4 = new Swiper('.swiper4', {
	slidesPerView: 1.5,
	spaceBetween: 25,
	speed: 700,

	breakpoints: {
		768: { slidesPerView: 3, spaceBetween: 25 },
		1200: { slidesPerView: 4, spaceBetween: 25 },
	},
})

let hasChanged2 = false

swiper3.on('slideChange', () => {
	if (window.innerWidth <= 768 && !hasChanged2) {
		hasChanged2 = true
		swiper3.params.centeredSlides = true
		swiper3.params.initialSlide = swiper3.activeIndex
		swiper3.update()
	}
})

const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')
const menuItems = document.querySelectorAll('.header__menu-item')
const menuBtn = document.querySelector('.header__menu-btn')

menuItems.forEach(item => {
	item.addEventListener('click', event => {
		event.stopPropagation()

		const submenu = item.querySelector('.header__submenu')

		if (submenu) {
			const isActive = submenu.classList.contains('header__submenu--active')

			document.querySelectorAll('.header__submenu').forEach(sub => {
				sub.classList.remove('header__submenu--active')
				menuBtn.classList.remove('header__menu-btn--active')
			})

			if (!isActive) {
				submenu.classList.add('header__submenu--active')
				menuBtn.classList.add('header__menu-btn--active')
			}
		}
	})
})

document.addEventListener('click', () => {
	document.querySelectorAll('.header__submenu').forEach(submenu => {
		submenu.classList.remove('header__submenu--active')
	})
})

burger.addEventListener('click', () => {
	burger.classList.toggle('header__burger--active')
	menu.classList.toggle('header__menu--active')
})
