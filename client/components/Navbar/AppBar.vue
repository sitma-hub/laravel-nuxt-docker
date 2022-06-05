<template>
  <Menubar :model="dockBasicItems" class="layout-menubar">
    <template #start>
      <NuxtLink to="/">
        <img
          alt="logo"
          src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
          height="40"
          class="p-mr-2"
        />
      </NuxtLink>
    </template>
    <template #end>
      <Button
        :icon="'pi ' + (colorMode.preference === 'dark' ? 'pi-moon' : 'pi-sun')"
        class="p-button-rounded"
        :style="{
          'background-color':
            colorMode.preference === 'dark'
              ? 'var(--gray-600)'
              : 'var(--gray-100)',
          color:
            colorMode.preference === 'dark'
              ? 'var(--gray-100)'
              : 'var(--gray-900)',
        }"
        @click="themeToggle()"
      />
    </template>
  </Menubar>
</template>

<script setup lang="ts">
const router = useRouter();
const colorMode = useColorMode();
const themeToggle = () => {
  if (colorMode.preference === "default") {
    colorMode.preference = "dark";
  } else {
    colorMode.preference = "default";
  }
};
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
  {
    label: "Test Page",
    icon: "pi pi-power-off",
    command: () => {
      navigateTo({ path: "testPage" });
    },
  },
];
</script>

<style lang="scss">
.layout-menubar {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 998;
  padding: 0.5rem;
  background-color: white;
}
.dark-mode .layout-menubar {
  background-color: black;
}
</style>
