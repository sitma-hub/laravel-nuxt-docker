<script setup lang="ts">
import { useCounter } from "~/store/counter";
const counter = useCounter();

const data = await useApiFetch("/products");
const data2: any = await $fetch("/api/testApi");
const data3 = await $fetch("/api/hello/Markus");
const data4 = await $fetch("/api/submit", {
  method: "post",
  body: { test: 123 },
});
</script>

<template>
  <div>
    <div class="grid">
      <Button label="Primary" class="col" />
      <Button label="Secondary" class="p-button-secondary col" />
      <Button label="Success" class="p-button-success col" />
      <Button label="Info" class="p-button-info col" />
      <Button label="Warning" class="p-button-warning col" />
      <Button label="Help" class="p-button-help col" />
      <Button label="Danger" class="p-button-danger col" />
      <div class="col-12 text-color">
        <h3>From pinia store:</h3>
        <div class="grid">
          <p class="col">
            From API 1: <strong> {{ data }} </strong>
          </p>
          <div class="col">
            From API 2: <strong> {{ data2 }} </strong>
          </div>
          <div class="col">
            From API 3: <strong> {{ data3 }} </strong>
          </div>
          <div class="col">
            From API 4: <strong> {{ data4 }} </strong>
          </div>
        </div>
      </div>
      <div class="col">
        <Card>
          <template #header>
            <Button @click="counter.increment(1)">+1 number click</Button>
            <InputNumber v-model="counter.n" />
          </template>
        </Card>
      </div>
      <div class="col"><chartTest /></div>
    </div>
  </div>
</template>
