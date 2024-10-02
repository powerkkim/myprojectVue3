import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import pinia from './stores'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

createApp(App)
  .use(router)
  .use(pinia)
  .use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: '.my-app-dark',
          cssLayer: false
      }
    }, 
  })
  .mount('#app')
 