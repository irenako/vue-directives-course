import { createApp } from "vue";
import App from "./App.vue";
import clickOutsideDirective from "./click-outside-directive.js";

import "./assets/main.css";

createApp(App).directive("click-outside", clickOutsideDirective).mount("#app");
