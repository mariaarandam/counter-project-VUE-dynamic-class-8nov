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
      console.log("Resta 1");
      counter.value--;
    }

    const getColorCount = () => {
      if (counter.value >= 1){
        return 'green'
      } else if (counter.value <= -1){
      return 'red'
      } else {
        return 'grey'
      }
    }

    return {
      counter,
      addCount,
      lowerCount,
      getColorCount,

    };
  },
}).mount("#app");
