import Vue from 'vue';
import leftmenu from '../components/leftmenu/leftmenu.vue';

new Vue({
	data() {
		return {
			hello: 'Hello'
		}
	},
	components: {
		leftmenu
	}
}).$mount('#app');
