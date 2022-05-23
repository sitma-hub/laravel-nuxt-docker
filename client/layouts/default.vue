<template>
<v-app>
  <NavbarAppBar />
  <NavbarNavDrawer />
  <v-main>
      <slot />
  </v-main>
  <NavbarFooter />
</v-app>
</template>
