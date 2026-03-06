import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import 'material-symbols';
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import lazyBg from './directives/lazyBg'

const app = createApp(App)

app.directive('lazy-bg', lazyBg)

app.mount('#app')