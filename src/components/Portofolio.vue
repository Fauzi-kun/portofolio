<template>
  <div>
    <h1 class="text-2xl font-semibold text-secondary mt-2">Portofolio</h1>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
    <div class="card bg-base-100 w-96 shadow-xl" v-for="item in porto">
      <div class="card-body">
        <h2 class="card-title">{{ item.name }}</h2>
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const porto = ref([
  {
    name: "website",
    content: "website javascript",
  },
  {
    name: "web backend",
    content: "website backend",
  },
]);
</script>
