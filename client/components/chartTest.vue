<script setup lang="ts">
import { BarChart, useBarChart } from "vue-chart-3";

const data = ref([30, 40, 60, 70, 50]);

const options = computed(() => ({
  scales: {
    y: {
      beginAtZero: true,
    },
  },
}));

const chartData = computed(() => ({
  labels: ["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"],
  datasets: [
    {
      data: data.value,
      backgroundColor: ["#77CEFF", "#0079AF", "#123E6B", "#97B0C4", "#A5C8ED"],
    },
  ],
}));

const { barChartProps } = useBarChart({
  chartData,
  options,
});
</script>

<template>
  <Card
    ><template #content>
      <BarChart v-bind="barChartProps" />
    </template>
  </Card>
</template>
