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
            // 定義 api 路徑
            const api = 'https://vue3-course-api.hexschool.io/v2/admin/signin';
            // 進行串接
            axios.post(api, this.user)
                .then((res) =>{
                    console.log(res);
                })
                .catch((err) => {
                    alert(err.data.message);
                })
        }
    },
}).mount('#app')