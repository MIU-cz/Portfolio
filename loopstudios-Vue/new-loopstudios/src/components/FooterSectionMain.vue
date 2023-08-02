<template>
  <div class="appFotter">
    <footer class="main__section footer">
      <FooterSection></FooterSection>
      <FooterAutor></FooterAutor>
    </footer>
  </div>
</template>

<script>
import FooterAutor from "./footer/FooterAutor.vue";
import FooterSection from "./footer/FooterSection.vue";

export default {
  data() {
    return {};
  },
  components: { FooterSection, FooterAutor },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
