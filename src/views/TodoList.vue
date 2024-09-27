<!-- TodoList.vue -->
<template>
  <div>Todo List Page</div>

  <Button label="Go to Main" @click="goToMain" />
</template>

<script setup>
import { useRouter } from 'vue-router';
import Button from 'primevue/button';



const router = useRouter();

const goToMain = () => {
  router.push('/');
};


</script>
