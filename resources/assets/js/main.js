window.Vue = require('vue');
Vue.config.debug = true;

// Tip toe,
// Through the tulips,
// With me.
window.app = new Vue(require('./app.vue')).$mount('body');