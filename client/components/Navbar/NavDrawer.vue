<template>
  <div>
    <div class="dock-demo">
      <div>
        <Dock :model="dockBasicItems" position="bottom">
          <template #icon="{ item }">
            <i :class="item.icon" style="font-size: 2rem"></i>
          </template>
        </Dock>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayFinder: false,
      displayTerminal: false,
      displayPhotos: false,
      images: null,
      nodes: null,
      dockBasicItems: [
        {
          label: "Finder",
          icon: "pi pi-plus",
        },
        {
          label: "App Store",
          icon: "pi pi-bookmark",
        },
        {
          label: "Photos",
          icon: "pi pi-video",
        },
        {
          label: "Trash",
          icon: "pi pi-trash",
        },
      ],
    };
  },
  nodeService: null,
  photoService: null,
  created() {},
  mounted() {},
  beforeUnmount() {},
  methods: {
    onDockItemClick(event, item) {
      if (item.command) {
        item.command();
      }

      event.preventDefault();
    },
    commandHandler(text) {
      let response;
      let argsIndex = text.indexOf(" ");
      let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

      switch (command) {
        case "date":
          response = "Today is " + new Date().toDateString();
          break;

        case "greet":
          response = "Hola " + text.substring(argsIndex + 1);
          break;

        case "random":
          response = Math.floor(Math.random() * 100);
          break;

        default:
          response = "Unknown command: " + command;
      }
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep(.dock-demo) {
  .dock-window {
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url("https://www.primefaces.org/wp-content/uploads/2021/02/primevue-blog.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 1;
  }

  .p-dock {
    z-index: 1000;
  }

  .p-menubar {
    padding-top: 0;
    padding-bottom: 0;
    border-radius: 0;

    .menubar-root {
      font-weight: bold;
      padding: 0 1rem;
    }

    .p-menuitem-link {
      padding: 0.5rem 0.75rem;
    }

    .p-menubar-root-list > .p-menuitem > .p-menuitem-link {
      padding: 0.5rem 0.75rem;

      > .p-submenu-icon {
        display: none;
      }
    }

    .p-menubar-end {
      span,
      i {
        padding: 0 0.75rem;
      }
    }

    .p-submenu-list {
      z-index: 2;
    }
  }
}
</style>
