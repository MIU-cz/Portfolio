<template>
	<div class="appMain">
		<main class="main__section">
			<SectionInteractive></SectionInteractive>
			<SectionCreations></SectionCreations>
		</main>
	</div>
</template>
  
<script>
import SectionCreations from './main/SectionCreations.vue';
import SectionInteractive from './main/SectionInteractive.vue';

export default {
	data() {
		return {};
	},
	components: { SectionInteractive, SectionCreations }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
  