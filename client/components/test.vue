<script setup lang="ts">
import { useCounter } from "~/store/counter";
const data = await useApiFetch("/products");
const counter = useCounter();
const data2 = await $fetch("/api/testApi");
const data3 = await $fetch("/api/hello/Markus");
const data4 = await $fetch("/api/submit", {
  method: "post",
  body: { test: 123 },
});
console.log("data2", data2, data3, data4);
</script>

<template>
  <div>
    <div class="grid">
      <div class="col-12 bg-green-400">
        <div class="grid">
          <div class="col">
            From API 1: <strong> {{ data }} </strong>
          </div>
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
    </div>
    <div class="grid">
      <div class="col-12 bg-primary-400">
        <h3>From pinia store:</h3>
      </div>
      <div class="col">
        <Button @click="counter.increment(1)">+1 number click</Button>
        <InputNumber v-model="counter.n" />
      </div>
      <div class="col">
        <chartTest />
      </div>
    </div>
  </div>
</template>
