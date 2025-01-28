<script setup lang="ts">
defineProps({
  employeeInfo: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <p>
    <!-- employee's country flag -->
    {{ employeeInfo.country }}

    <!-- name of the employee -->
    {{ employeeInfo.name }}

    <!-- job icon -->
    <span v-if="employeeInfo.job === 'chef'"> 🧑‍🍳 </span>
    <span v-else> 🍳 </span>
    <!-- another way to check the job -->
    <!-- <span>{{ employeeInfo.job === "chef" ? "🧑‍🍳" : "🍳" }}</span> -->

    <a v-if="employeeInfo.facebook" :href="employeeInfo.facebook"> 🔗 </a>
  </p>
</template>
