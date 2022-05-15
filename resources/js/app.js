require("./bootstrap");

import { createApp } from "vue";
import { createPinia } from "pinia";

import Layout from "./layout/Layout.vue"

import HelloWorld from "./components/Welcome";
import ModalComponent from "./components/Modal.vue";
import TestComponent from "./components/Test.vue";
import MainComponent from "./components/Main.vue";


import Navbar from "./components/Navbar.vue";


import router from "./router/index";

import "flowbite";

const app = createApp({});

app.component("hello-world", HelloWorld);
app.component("modal-component", ModalComponent);
app.component("test-component", TestComponent);
app.component("main-component", MainComponent);

app.component("nav-bar", Navbar);

app.component("layout", Layout)

app.use(createPinia());
app.use(router);
app.mount("#app");
