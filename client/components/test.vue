<script setup>
const data = await useApiFetch('/products')
</script>

<template>
    <div>
        {{ data }}
    </div>
</template>