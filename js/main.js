// Инициализация кастомного селекта языка
const element = document.getElementById('my-select')
const choices = new Choices(element, {
	searchEnabled: false, // Отключаем поиск в выпадающем списке
	itemSelectText: '', // Убираем текст при выборе элемента
})

// Инициализация первого Swiper (баннер)
const swiper = new Swiper('.swiper1', {
	loop: true,
	speed: 1200,
	spaceBetween: 0,
	containerModifierClass: 'banner-swiper',

	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		bulletClass: 'banner__pagination-bullet',
		bulletActiveClass: 'banner__pagination-bullet--active',
	},
})

// Инициализация второго Swiper (раздел "Бизнес")
const swiper2 = new Swiper('.swiper2', {
	slidesPerView: 1.5,
	slidesPerGroup: 1,
	spaceBetween: 24,
	speed: 1000,

	navigation: {
		nextEl: '.business__next',
		prevEl: '.business__prev',
	},

	pagination: {
		el: '.business__pagination',
		bulletClass: 'business__pagination-bullet',
		bulletActiveClass: 'business__pagination-bullet--active',
	},

	breakpoints: {
		// При ширине экрана от 0 до 767px — 1.5 слайда
		0: { slidesPerView: 1.5 },

		// При ширине от 768px до 1199px — 2 слайда
		768: { slidesPerView: 2 },

		// При ширине от 1200px и выше — 3 слайда
		1200: { slidesPerView: 3 },
	},
})

// При смене слайда проверяем ширину экрана и настраиваем центральное позиционирование
let hasChanged1 = false
swiper2.on('slideChange', () => {
	if (window.innerWidth <= 768 && !hasChanged1) {
		hasChanged1 = true

		setTimeout(() => {
			swiper2.params.centeredSlides = true
			swiper2.update()
		}, 550)
	}
})

// Инициализация третьего Swiper
const swiper3 = new Swiper('.swiper3', {
	slidesPerView: 1.5,
	spaceBetween: 24,
	speed: 700,

	breakpoints: {
		// При ширине экрана 768px и больше — 2 слайда
		768: { slidesPerView: 2 },

		// При ширине экрана 1200px и больше — 3 слайда
		1200: { slidesPerView: 3 },
	},
})

// Аналогичная настройка центрирования для swiper3
let hasChanged2 = false
swiper3.on('slideChange', () => {
	if (window.innerWidth <= 768 && !hasChanged2) {
		hasChanged2 = true

		setTimeout(() => {
			swiper3.params.centeredSlides = true

			swiper3.update()
		}, 400)
	}
})

// Инициализация четвертого Swiper
const swiper4 = new Swiper('.swiper4', {
	slidesPerView: 1.5,
	spaceBetween: 22,
	speed: 1500,

	breakpoints: {
		// При ширине экрана 768px и больше — отображаем 3 слайда
		768: { slidesPerView: 3 },

		// При ширине экрана 1200px и больше — отображаем 4 слайда
		1200: { slidesPerView: 4 },
	},
})

// Аналогичная настройка центрирования для swiper4
let hasChanged3 = false
swiper4.on('slideChange', () => {
	if (window.innerWidth <= 768 && !hasChanged3) {
		hasChanged3 = true

		setTimeout(() => {
			swiper4.params.centeredSlides = true

			swiper4.update()
		}, 700)
	}
})

// Бургер-меню и работа с подменю
const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')
const menuItems = document.querySelectorAll('.header__menu-item')
const menuBtn = document.querySelector('.header__menu-btn')

// Обработчик клика по элементам меню
menuItems.forEach(item => {
	item.addEventListener('click', event => {
		event.stopPropagation() // Предотвращаем всплытие события

		const submenu = item.querySelector('.header__submenu')

		if (submenu) {
			const isActive = submenu.classList.contains('header__submenu--active')

			// Закрываем все подменю перед открытием нового
			document.querySelectorAll('.header__submenu').forEach(sub => {
				sub.classList.remove('header__submenu--active')
				menuBtn.classList.remove('header__menu-btn--active')
			})

			// Открываем только если ранее не было активным
			if (!isActive) {
				submenu.classList.add('header__submenu--active')
				menuBtn.classList.add('header__menu-btn--active')
			}
		}
	})
})

// Закрытие подменю при клике вне него
document.addEventListener('click', () => {
	document.querySelectorAll('.header__submenu').forEach(submenu => {
		submenu.classList.remove('header__submenu--active')
	})
})

// Открытие/закрытие бургер-меню
burger.addEventListener('click', () => {
	burger.classList.toggle('header__burger--active')
	menu.classList.toggle('header__menu--active')
})
