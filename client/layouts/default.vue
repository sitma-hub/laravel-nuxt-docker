<template>
  <div style>
    <NavbarAppBar />
    <slot />
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: "reset-body",
      },
    };
  },
};
</script>

<style>
.reset-body {
  margin: 0;
  background-color: black;
}
</style>
