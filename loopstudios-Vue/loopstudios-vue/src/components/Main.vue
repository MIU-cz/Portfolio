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
	components: { SectionInteractive, SectionCreations },
	methods: {
		replaceImg() {
			let images = document.getElementsByTagName('img');
			for (let i = 0; i < images.length; i++) {
				if (images[i].src.includes('images/desktop/')) {
					images[i].src = images[i].src.replace('images/desktop/', 'images/mobile/');
				}
			}
		}
	},
	mounted() {
		if (window.screen.width <= 768) {
			this.replaceImg();
		}
	}
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
  