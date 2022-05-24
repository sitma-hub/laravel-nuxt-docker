<template>
  <v-app>
    <NavbarAppBar />
    <NavbarNavDrawer />
    <v-lazy>
      <v-main>
        <slot />
      </v-main>
    </v-lazy>
    <v-lazy>
      <NavbarFooter />
    </v-lazy>
  </v-app>
</template>
