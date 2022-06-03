<template>
  <Menubar :model="dockBasicItems" class="layout-menubar">
    <template #start>
      <img
        alt="logo"
        src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
        height="40"
        class="p-mr-2"
      />
    </template>
    <template #end>
      <Button
        :icon="'pi ' + (theme.isDarkMode ? 'pi-moon' : 'pi-sun')"
        class="p-button-rounded"
        :style="{
          'background-color': !theme.isDarkMode
            ? 'var(--gray-600)'
            : 'var(--gray-100)',
          color: theme.isDarkMode ? 'var(--gray-900)' : 'var(--gray-100)',
        }"
        @click="theme.toggle()"
      />
      <InputText placeholder="Search" type="text" />
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { useTheme } from "~/store/theme";
const theme = useTheme();
const dockBasicItems = ref([]);
dockBasicItems.value = [
  {
    label: "File",
    icon: "pi pi-file",
    items: [
      {
        label: "New",
        icon: "pi pi-plus",
        items: [
          {
            label: "Bookmark",
            icon: "pi pi-bookmark",
          },
          {
            label: "Video",
            icon: "pi pi-video",
          },
        ],
      },
      {
        label: "Delete",
        icon: "pi pi-trash",
      },
      {
        separator: true,
      },
      {
        label: "Export",
        icon: "pi pi-external-link",
      },
    ],
  },
  {
    label: "Edit",
    icon: "pi pi-pencil",
    items: [
      {
        label: "Left",
        icon: "pi pi-align-left",
      },
      {
        label: "Right",
        icon: "pi pi-align-right",
      },
      {
        label: "Center",
        icon: "pi pi-align-center",
      },
      {
        label: "Justify",
        icon: "pi pi-align-justify",
      },
    ],
  },
  {
    label: "Users",
    icon: "pi pi-user",
    items: [
      {
        label: "New",
        icon: "pi pi-user-plus",
      },
      {
        label: "Delete",
        icon: "pi pi-user-minus",
      },
      {
        label: "Search",
        icon: "pi pi-users",
        items: [
          {
            label: "Filter",
            icon: "pi pi-filter",
            items: [
              {
                label: "Print",
                icon: "pi pi-print",
              },
            ],
          },
          {
            icon: "pi pi-bars",
            label: "List",
          },
        ],
      },
    ],
  },
  {
    label: "Events",
    icon: "pi pi-calendar",
    items: [
      {
        label: "Edit",
        icon: "pi pi-pencil",
        items: [
          {
            label: "Save",
            icon: "pi pi-calendar-plus",
          },
          {
            label: "Delete",
            icon: "pi pi-calendar-minus",
          },
        ],
      },
      {
        label: "Archieve",
        icon: "pi pi-calendar-times",
        items: [
          {
            label: "Remove",
            icon: "pi pi-calendar-minus",
          },
        ],
      },
    ],
  },
  {
    label: "Quit",
    icon: "pi pi-power-off",
  },
];
</script>

<style lang="scss">
.layout-menubar {
  position: fixed;
}
</style>
