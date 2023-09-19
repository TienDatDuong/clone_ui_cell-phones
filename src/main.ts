import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import naive from "naive-ui";
import 'virtual:uno.css'

const app = createApp(App);

app.use(naive);

app.mount("#app");
