import { ref, Ref } from "vue";
import { defineStore } from "pinia";

interface CounterState {
  n: number;
  myRef: Ref<string>;
}

export const useCounter = defineStore("counter", {
  state: (): CounterState => ({
    n: 5,
    myRef: ref("hello"),
  }),
  actions: {
    increment(p = 1) {
      this.n += p;
      if (this.n > 100) {
        this.n = 100;
      } else if (this.n < 0) {
        this.n = 0;
      }
    },
  },
  getters: {
    doubleCount: (state) => state.n * 2,
  },
});
