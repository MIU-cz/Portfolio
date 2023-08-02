<template>
  <!-- <div id="app"> -->
  <HeaderSectionMain></HeaderSectionMain>
  <MainSectionMain></MainSectionMain>
  <FooterSectionMain></FooterSectionMain>
  <!-- </div> -->
</template>

<script>
import HeaderSectionMain from "./components/HeaderSectionMain.vue";
import MainSectionMain from "./components/MainSectionMain.vue";
import FooterSectionMain from "./components/FooterSectionMain.vue";

export default {
  name: "App",
  components: {
    HeaderSectionMain,
    MainSectionMain,
    FooterSectionMain,
  },
};
</script>

<style lang="scss"></style>
