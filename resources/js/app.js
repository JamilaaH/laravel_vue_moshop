/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import vuetify from './vuetify'

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('login', require('./components/Login.vue').default);
Vue.component('shop', require('./pages/Shop.vue').default);
Vue.component('dashboard', require('./components/Dashboard.vue').default);
Vue.component('mon-shop', require('./pages/MonShop.vue').default);
Vue.component('panier', require('./pages/Panier.vue').default);
Vue.component('mes-commandes', require('./pages/Commande.vue').default);
Vue.component('add-product', require('./pages/AddProduct.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    vuetify
});
