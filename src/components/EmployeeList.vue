<script setup lang="ts">
import EmployeeListItem from "./EmployeeListItem.vue";

defineProps({
  employees: Array,
});
</script>

<template>
  <h1>Staff</h1>

  <EmployeeListItem
    v-for="employee in employees"
    :key="employee"
    :employeeInfo="employee"
  />
</template>
