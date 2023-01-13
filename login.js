// vue 載入
import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.esm-browser.min.js';

createApp({
    data() {
        return {
            // 建立資料格式
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        // 登入方法
        login() {
            console.log(this.user.username, this.user.password);
        }
    },
}).mount('#app')