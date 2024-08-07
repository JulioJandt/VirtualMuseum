import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Importar os estilos do Vuetify
import '@mdi/font/css/materialdesignicons.css'; // Importar ícones do Material Design

const vuetify = createVuetify({
  
});

const app = createApp(App);

app.use(router);
app.use(vuetify);

app.mount('#app');
