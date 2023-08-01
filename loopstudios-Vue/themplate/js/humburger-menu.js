// add button hamburge scripts
// =================================
const navBar = document.querySelector('.navBar');

function addBurgerBtn() {
	const btnHtml =
		`
	<!-- Burger button -->
		<button button class="btn_burger" id = "btnBurger" aria - label="humburger" >
			<span></span>
	</button > 
	`;

	navBar.innerHTML += btnHtml;

	const btnBurger = document.querySelector('.btn_burger');
	return btnBurger;
}

if (window.screen.width <= 992) {
	addBurgerBtn();
}

// manipulate button hamburge scripts
// =================================
const headerMenu = document.querySelector('.header_menu');

btnBurger.addEventListener('click', function () {
	btnBurger.classList.toggle('btn_burger-active');
	headerMenu.classList.toggle('header_menu-active');
})