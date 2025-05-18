import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
// import '@/assets/bootstrap.min.css'
// import '@/assets/bootstrap.bundle.min.js'
//import "bootstrap/dist/css/bootstrap.min.css"
import "@/assets/custom.scss" // ← custom Bootstrap SCSS
import "@/assets/custom_styles.css"
import "bootstrap"

import "material-icons/iconfont/material-icons.css"

createApp(App).use(store).use(router).mount("#app")
