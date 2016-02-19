window.Vue = require('vue');
Vue.config.debug = true;

Vue.use(require('vue-resource'));
require('fastclick')(document.body);

// Tip toe,
// Through the tulips,
// With me.
window.app = new Vue(require('./app.vue')).$mount('body');