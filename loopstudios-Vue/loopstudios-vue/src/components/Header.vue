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
  components: { HeaderSection, HeaderNav }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
