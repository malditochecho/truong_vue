<script setup lang="ts">
defineProps(["dishes"]);
</script>

<template>
  <h1>Dishes</h1>

  <p v-for="dish in dishes" :id="'dish-' + dish">
    {{ dish }}
  </p>
</template>
