<script setup lang="ts">
import { useCounter } from "~/store/counter";
const data = await useApiFetch("/products");
const counter = useCounter();
</script>

<template>
  <div>
    From API: <strong> {{ data }} </strong>
    <h3>From pinia store:</h3>
    <Button @click="counter.increment(1)">+1 number click</Button>
    <InputNumber v-model="counter.n" />
    <chartTest />
  </div>
</template>
