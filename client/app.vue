import { onMounted } from 'vue';
<template>
  <div>
    <NuxtLayout :name="colorMode.preference">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
onMounted(() => {
  colorMode.preference = "dark";
});
definePageMeta({
  layout: false,
});
useHead({
  titleTemplate: "MÜNCH App",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "MÜNCH App", content: "MÜNCH App" }],
  bodyAttrs: {
    class: "reset-body",
  },
});
</script>

<style>
.reset-body {
  margin: 0;
}
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
  padding-top: 4.5rem;
}
.dark-mode body {
  background-color: #000000;
  color: #ebf4f1;
}
</style>
