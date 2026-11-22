//CSS
import './assets/main.css'
import 'unfonts.css'

//Vue/Vue router
import { createApp } from 'vue'
import router from "./plugins/router";

//Vuetify
import 'vuetify/styles';
import vuetify from './plugins/vuetify';

//Importing components
import App from './App.vue'

//Config/storage settings
import setUpLocalStorage from './utilities/localStorage';
import { createPinia } from 'pinia';

//Set up the local storage defaults
const pinia = createPinia();
setUpLocalStorage();

createApp(App)
.use(router)
.use(vuetify)
.use(pinia)
.mount('#app')