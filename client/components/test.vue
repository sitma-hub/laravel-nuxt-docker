<script setup lang="ts">
import { useCounter } from "~/store/counter";
const data = await useApiFetch("/products");
const counter = useCounter();
</script>

<template>
  <div>
    <v-row>
      <v-col>
        From API: <strong> {{ data }} </strong>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>From pinia store:</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row>
          <v-col>
            <v-text-field v-model="counter.n"></v-text-field>
          </v-col>
          <v-col>
            <v-slider v-model="counter.n" min="0" max="100" step="1"></v-slider>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn elevation="4" color="primary" @click="counter.increment(1)">
              +1 number click
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              elevation="4"
              color="secondary"
              @click="counter.increment(-1)"
            >
              -1 number click
            </v-btn>
          </v-col>
          <v-col>
            <v-btn elevation="4" color="error" @click="counter.increment(10)">
              +10 number click
            </v-btn>
          </v-col>
          <v-col>
            <v-btn elevation="4" color="accent" @click="counter.increment(-10)">
              -10 number click
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <chartTest />
      </v-col>
    </v-row>
  </div>
</template>
