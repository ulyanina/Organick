// first variant of menu
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        closeBtn = document.querySelector('.menu__close'),
        veil = document.querySelector('.veil'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        veil.classList.toggle('presentation-veil'); //пелена 
    });

    closeBtn.addEventListener('click', () => {
		menu.classList.toggle('menu-active');
		veil.classList.toggle('presentation-veil'); //пелена 
	});

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            veil.classList.toggle('presentation-veil');
        })
    })
})

//second variant of menu
const humburger = document.querySelector('.humburger'),
   menu = document.querySelector('.menu'),
   closeBtn = document.querySelector('.menu__close');

humburger.addEventListener('click', () => {
   menu.classList.add('active');
});
closeBtn.addEventListener('click', () => {
   menu.classList.remove('active');
});
