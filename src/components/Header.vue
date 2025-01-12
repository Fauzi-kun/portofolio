<template>
  <header>
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">Fauzi</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a>Link</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul class="bg-base-100 rounded-t-none p-2">
                <li v-for="item in link">
                  <a :href="item.url">{{ item.name }}</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script setup>
const link = [
  {
    id: 1,
    name: "About",
    url: "/about",
  },
  {
    id: 2,
    name: "Portofolio",
    url: "/porto",
  },
  {
    id: 3,
    name: "Experience",
    url: "/exp",
  },
];
</script>
