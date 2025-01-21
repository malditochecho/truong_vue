<script setup>
import { ref } from "vue";

const inputValue = ref(); // reactive reference
const checkboxValue = ref(); // reactive reference

function buttonClicked() {
  console.log(
    `the input has the value ${inputValue.value} and the checkbox is ${checkboxValue.value}`
  );
}
</script>

<template>
  <p>current value of text input: {{ inputValue }}</p>
  <p>current value of : {{ checkboxValue }}</p>

  <input type="text" v-model="inputValue" />
  <input type="checkbox" v-model="checkboxValue" />

  <button @click="buttonClicked" type="submit">submit</button>
</template>

<style></style>
