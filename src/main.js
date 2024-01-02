import { createApp } from "vue";
// import './style.css'
import App from "./App.vue";
// 2. 引入组件样式
import "vant/lib/index.css";

// 1. 引入你需要的组件
import { Tab, Tabs } from 'vant';

const app = createApp(App);
// 3. 注册你需要的组件
app.use(Tab);
app.use(Tabs);

app.mount("#app");
