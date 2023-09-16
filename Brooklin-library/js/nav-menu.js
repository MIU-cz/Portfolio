const btnBurger = document.querySelector('#btnBurger');
const navMenu = document.querySelector('#navMenu');
const navMenuItems = document.querySelector('#navMenuItems');
const navbar = document.querySelector('#navbar');

function toggleMenu() {
	btnBurger.classList.toggle('btn_burger-active');
	navMenu.classList.toggle('navbar__navmenu-active');
};

function closeMenu(e) {
	// console.log(e.target);
	// console.log(e.currentTarget);

	if (e.target !== navMenuItems) {
		btnBurger.classList.remove('btn_burger-active');
		navMenu.classList.remove('navbar__navmenu-active');
		navbar.removeEventListener('click', closeMenu);
	}
};

btnBurger.addEventListener('click', function (e) {
	toggleMenu();
	e.stopPropagation();
	navbar.addEventListener('click', closeMenu);
});

// console.log(e.target);
// console.log(e.currentTarget);