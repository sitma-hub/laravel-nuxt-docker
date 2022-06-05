<template>
  <div>
    <NavbarAppBar />
    <slot />
  </div>
</template>

<script setup>
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "assets/style/themes/md-dark-indigo/theme.css",
    },
  ],
});
</script>
