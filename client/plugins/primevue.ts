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
import Password from "primevue/password";
import Divider from "primevue/divider";
import Calendar from "primevue/calendar";
import Dropdown from "primevue/dropdown";
import Checkbox from "primevue/checkbox";
import Dialog from "primevue/dialog";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    ripple: true,
    locale: {
      startsWith: "Begint mit",
      contains: "Enthält",
      notContains: "Enthält nicht",
      endsWith: "Endet mit",
      equals: "Gleich",
      notEquals: "Nicht Gleich",
      noFilter: "Kein Filter",
      lt: "weniger als",
      lte: "weniger als oder gleich",
      gt: "größer als",
      gte: "größer als oder gleich",
      dateIs: "Datum ist",
      dateIsNot: "Datum ist nicht",
      dateBefore: "Datum ist vorher",
      dateAfter: "Datum ist später",
      clear: "Löschen",
      apply: "Anwenden",
      matchAll: "Übereinstimmung mit allem",
      matchAny: "Übereinstimmung mit min. einem",
      addRule: "Erzeuge Regel",
      removeRule: "Lösche Regel",
      accept: "Ja",
      reject: "Nein",
      choose: "Wählen",
      upload: "Hochladen",
      cancel: "Abbrechen",
      dayNames: [
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
      ],
      dayNamesShort: ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"],
      dayNamesMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
      monthNames: [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember",
      ],
      monthNamesShort: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dez",
      ],
      today: "Heute",
      weekHeader: "KW",
      firstDayOfWeek: 1,
      dateFormat: "dd.mm.yy",
      weak: "Woche",
      medium: "Mittel",
      strong: "Fett",
      passwordPrompt: "Passwort eingeben",
      emptyFilterMessage: "Keine Ergebnisse",
      emptyMessage: "Keine Optionen verfügbar",
    },
  });
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
  nuxtApp.vueApp.component("Password", Password);
  nuxtApp.vueApp.component("Divider", Divider);
  nuxtApp.vueApp.component("Calendar", Calendar);
  nuxtApp.vueApp.component("Dropdown", Dropdown);
  nuxtApp.vueApp.component("Checkbox", Checkbox);
  nuxtApp.vueApp.component("Dialog", Dialog);
});
