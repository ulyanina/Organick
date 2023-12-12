'use strict'
const hamburger = document.querySelector('.hamburger'),
   menu = document.querySelector('.menu'),
   menuItem = document.querySelectorAll('.menu li a');
   // closeBtn = document.querySelector('.menu-close');

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('hamburger-active');
});

hamburger.addEventListener('click', () => {
   menu.classList.toggle('menu-active');
});

menuItem.forEach((i) => {
   i.addEventListener('click', () => {
      menu.classList.remove('menu-active');
      hamburger.classList.remove('hamburger-active');
   })
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 1600) {
		$('.pageup').fadeIn();
	} else {
		$('.pageup').fadeOut();
	}
});

function validateForms(form) {
	$(form).validate({
		rules: {
			email: {
				required: true,
				email: true
         },
		},
		messages: {
			email: {
				required: 'Пожалуйста, введите свой почтовый адрес',
				email: 'Неправильно введен адрес почты'
         },
		}
	});
}
validateForms('#form');

// menuItem.forEach(item => {
//    item.addEventListener('click', () => {
//        hamburger.classList.toggle('hamburger_active');
//        menu.classList.toggle('menu_active');
//        veil.classList.toggle('presentation-veil');
//    })
// })


// hamburger.addEventListener('click', () => {
//    menu.classList.toggle('menu-active');
// });

// closeBtn.addEventListener('click', () => {
//    menu.classList.toggle('menu-active');
// });


// const humburger = document.querySelector('.humburger'),
//    menu = document.querySelector('.menu'),
//    closeBtn = document.querySelector('.menu__close');

// humburger.addEventListener('click', () => {
//    menu.classList.add('active');
// });
// closeBtn.addEventListener('click', () => {
//    menu.classList.remove('active');
// });