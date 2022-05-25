import { defineNuxtPlugin } from "#app";
import "primeflex/primeflex.css";
import AutoComplete from "primevue/autocomplete";
import Button from "primevue/button";
import PrimeVue from "primevue/config";
import Dock from "primevue/dock";
import Galleria from "primevue/galleria";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import Terminal from "primevue/terminal";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("InputNumber", InputNumber);
  nuxtApp.vueApp.component("Dock", Dock);
  nuxtApp.vueApp.component("Menu", Menu);
  nuxtApp.vueApp.component("Menubar", Menubar);
  nuxtApp.vueApp.component("Terminal", Terminal);
  nuxtApp.vueApp.component("Galleria", Galleria);
  nuxtApp.vueApp.component("Toast", Toast);
  nuxtApp.vueApp.component("AutoComplete", AutoComplete);
});
