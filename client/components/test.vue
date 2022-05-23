<script setup lang="ts">
import { useCounter } from "~/store/counter";
const data = await useApiFetch('/products');
const counter = useCounter();

</script>

<template>
    <div>
        From API: {{ data }}
        From pinia: {{ counter.n }}
        <button class="p-4" @click="counter.increment()">+1 number click</button>
    </div>
</template>