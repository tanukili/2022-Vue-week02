// 載入 vue
import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.esm-browser.min.js';

const app ={
  data() {
    return {
      // api 路徑
      apiUrl: 'https://vue3-course-api.hexschool.io/v2',
      apiPath: 'vuejslive2022',
      products: [],
      tempProduct: {}
    }
  },
  methods: {
    // 方法：確認權限（先確認有權限，再取得遠端資料）
    checkAdmin() {
      const url = `${this.apiUrl}/api/user/check`;
      axios.post(url)
        .then(() => {
          this.getData();
        })
        .catch((err) => {
          alert(err.data.message);
          window.location = 'login.html';
        })
    },
    // 方法：串接產品列表 
    getData() {
      const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`;
      axios.get(url)
        .then((res) => {
          // 沒有取出 token 會報錯
          this.products = res.data.products;
        })
        .catch((err) => {
          alert(err.data.message);
        })
    }
    //


  },
  created() {
    // 取出 token
    const token =document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    axios.defaults.headers.common['Authorization'] = token;

    this.checkAdmin();
  },
}

createApp(app).mount('#app');

