import Card from 'primevue/card';
<script setup>
const show = ref(null);
onMounted(() => {
  show.value = true;
});
const toggleShow = () => {
  show.value = !show.value;
};
</script>
<template>
  <div>
    <div class="grid m-5">
      <div class="col-2 col-offset-5">
        <Transition name="bounce" mode="out-in">
          <div v-if="show" class="my-router-link">
            <NuxtLink to="/">
              <Card class="bg-blue-600 text-white text-center">
                <template #content> Home </template>
              </Card>
            </NuxtLink>
          </div>
          <div v-else-if="show === false" class="my-router-link">
            <NuxtLink to="/">
              <Card class="bg-red-600 text-white text-center">
                <template #content> Home </template>
              </Card>
            </NuxtLink>
          </div>
        </Transition>
      </div>
    </div>
    <div class="grid m-5">
      <div class="col-2 col-offset-5">
        <Button @click="toggleShow">Toggle</Button>
      </div>
    </div>
  </div>
</template>
