<template>
  <section class="grid grid-cols-8 gap-5 mx-5 my-2">
    <article class="md:col-span-5 col-span-8">
      <h1 class="text-3xl font-semibold text-secondary">
        Nama saya Fauzi Malik Nashrullah
      </h1>
      <h2 class="text-2xl font-semibold text-secondary mt-2">
        Dan saya adalah seorang Full Stack Developer
      </h2>
    </article>
    <article class="col-span-3 hidden md:block">
      <img :src="profile" alt="" />
    </article>
  </section>
</template>
<script setup>
import profile from "@/assets/DSC00410.jpg";
</script>
