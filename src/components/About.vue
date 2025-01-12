<template>
  <section class="my-3">
    <h1 class="text-2xl font-semibold text-secondary mt-2">Tentang Saya</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quos illo,
      laborum cupiditate ut dolorum neque, vero temporibus earum recusandae
      ipsam. Possimus blanditiis ipsum nobis quibusdam ab totam odio?
      Voluptates.
    </p>
    <article class="my-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div class="card bg-base-100 w-96 shadow-xl" v-for="item in skills">
          <div class="card-body">
            <h2 class="card-title">{{ item.title }}</h2>
            <p>{{ item.listSkill }}</p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup>
import { ref } from "vue";
const skills = ref([
  {
    title: "Backend Developer",
    listSkill: "ExpressJs, Laravel",
  },
  {
    title: "Frontend Developer",
    listSkill: "ReactJs, VueJs",
  },
]);
</script>
