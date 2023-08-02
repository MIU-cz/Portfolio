<template>
  <div class="appHeader">
    <!-- # HEADER STYLES -->
    <!-- ================================ -->
    <header class="main__section header">
      <HeaderNav></HeaderNav>
      <HeaderSection />

    </header>
  </div>
</template>

<script>
import HeaderNav from './header/HeaderNav.vue';
import HeaderSection from './header/HeaderSection.vue';

export default {
  data() {
    return {};
  },
  components: { HeaderSection, HeaderNav },

  methods: {
    addBurgerBtn() {
      const btnHtml =
        `
      <!-- Burger button -->
        <button button class="btn_burger" id = "btnBurger" aria - label="humburger" >
          <span></span>
      </button > 
      `;
      const navBar = document.querySelector('.navBar');
      navBar.innerHTML += btnHtml;

      const btnBurger = document.querySelector('.btn_burger');
      // return btnBurger;

      // manipulate button hamburge scripts
      // =================================
      const headerMenu = document.querySelector('.header_menu');

      btnBurger.addEventListener('click', function () {
        btnBurger.classList.toggle('btn_burger-active');
        headerMenu.classList.toggle('header_menu-active');
      });
    }
  },

  mounted() {
    if (window.screen.width <= 992) {
      this.addBurgerBtn();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
