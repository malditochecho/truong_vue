<script setup lang="ts">
import { ref } from "vue";

// component imports
import JiaoMenu from "./components/DishList.vue";
import JiaoStaff from "./components/EmployeeList.vue";

// data
const dishes = ref(["fried rice", "chow fun", "chow mein", "kung pao shrimps"]);
const crew = ref([
  { id: 1, name: "minh", country: "🇻🇳", job: "cook" },
  { id: 2, name: "thien", country: "🇻🇳", job: "chef" },
  { id: 3, name: "james", country: "🇵🇭", job: "cook" },
  {
    id: 4,
    name: "truong",
    country: "🇻🇳",
    job: "cook",
    facebook: "https://www.facebook.com/ht.jk2802",
  },
  {
    id: 5,
    name: "sergio",
    country: "🇨🇱",
    job: "cook",
    facebook: "https://www.facebook.com/profile.php?id=100021852592094",
  },
  { id: 6, name: "quan", country: "🇻🇳", job: "cook" },
  { id: 7, name: "phong", country: "🇻🇳", job: "cook" },
]);
</script>

<template>
  <JiaoMenu :dishes />
  <JiaoStaff :employees="crew" />
</template>
