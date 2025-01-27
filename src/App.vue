<!-- text interpolation example -->

<script setup lang="ts">
import { ref } from "vue";

const somevariable = ref("truong");
</script>

<template>
  <p>Hola {{ somevariable }} !</p>
</template>

<style></style>
