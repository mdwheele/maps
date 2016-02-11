window.Vue = require('vue');
Vue.config.debug = true;

var attachFastClick = require('fastclick');
attachFastClick(document.body);

// Tip toe,
// Through the tulips,
// With me.
window.app = new Vue(require('./app.vue')).$mount('body');