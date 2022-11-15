<template>
  <div>
    <!-- <NavbarAppBar /> -->
    <slot />
  </div>
</template>

<script setup>
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "assets/style/themes/md-light-indigo/theme.css",
    },
  ],
});
</script>
