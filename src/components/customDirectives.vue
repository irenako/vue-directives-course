<script setup>
import { ref } from "vue";
const show = ref(true);
const colors = ref(["blue", "red", "green"]);
const vColor = {
  mounted(el, binding) {
    const colors = binding.value;
    if (binding.modifiers.underline) {
      el.style.textDecoration = "underline";
    }

    if (binding.modifiers.italic) {
      el.style.fontStyle = "italic";
    }
    const speeds = {
      slow: 2000,
      normal: 1000,
      fast: 500,
      crazy: 100,
    };
    const speedName = binding.arg || "normal";
    const speed = speeds[speedName];
    let i = 0;
    el.__ColorInterval__ = setInterval(() => {
      console.log("🖍 coloring");
      el.style.color = colors[i];
      i++;
      if (i === colors.length) i = 0;
    }, speed);
  },
  unmounted(el) {
    clearInterval(el.__ColorInterval__);
  },
};
setTimeout(() => {
  colors.value.push("pink");
}, 5000);
</script>

<template>
  <h1 v-if="show" v-color.underline.italic="colors">Vue School</h1>
  <button @click="show = !show">Toggle</button>
</template>
