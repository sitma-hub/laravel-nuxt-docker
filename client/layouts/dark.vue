<template>
  <div>
    <NavbarAppBar />
    <slot />
  </div>
</template>

<script setup>
useHead({
  titleTemplate: "MÜNCH App",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "MÜNCH App", content: "MÜNCH App" }],
  bodyAttrs: {
    class: "reset-body",
  },
  link: [
    {
      rel: "stylesheet",
      href: "assets/style/themes/md-dark-indigo/theme.css",
    },
  ],
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
