import { ref, Ref } from "vue";
import { defineStore } from "pinia";

interface Theme {
  darkMode: Ref<boolean>;
}

export const useTheme = defineStore("theme", {
  state: (): Theme => ({
    darkMode: ref(true),
  }),
  actions: {
    toggle() {
      this.darkMode = !this.darkMode;
    },
  },
  getters: {
    isDarkMode: (state) => state.darkMode,
  },
});
