import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';

import VueSplide from '../node_modules/@splidejs/vue-splide';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

const app = createApp( App )
app.use( VueSplide );
app.mount( '#app' );
