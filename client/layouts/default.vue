<template>
  <div :style="'background-color: ' + (theme.isDarkMode ? 'black' : 'white')">
    <NavbarAppBar />
    <slot />
  </div>
</template>

<script setup>
import { useTheme } from "~/store/theme";
const theme = useTheme();
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
</style>
