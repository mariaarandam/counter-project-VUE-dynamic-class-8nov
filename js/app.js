// Tu código aquí.

import {
  createApp,
  ref,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const message = ref("Hello Vue!");
    const counter = ref(0);

    const addCount = () => {
      console.log("Suma 1");
      counter.value++;
    }

    const lowerCount = () => {
      console.log("Suma 1");
      counter.value--;
    }

    return {
      counter,
      addCount,
      lowerCount

    };
  },
}).mount("#app");
