import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebookF, faGoogle, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import './registerServiceWorker';

library.add(faFacebookF, faGoogle, faTwitter, faGithub);

axios.defaults.baseURL = 'http://localhost:8080/';

const app = createApp(App);
app.use(router);
app.mount('#app');
app.component('font-awesome-icon', FontAwesomeIcon);
