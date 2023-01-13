// vue 載入
import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.esm-browser.min.js';

createApp({
    data() {
        return {
            counter: 5
        }
    },
}).mount('#app')