<script setup>
import { useRouter } from 'vue-router';
import Button from 'primevue/button';
import SplitButton from 'primevue/splitbutton';
import apiClient from '@/apis';


const router = useRouter();


const goToTodoList = () => {
  router.push('/todolist');
};

const goToTodoView = () => {
  router.push('/todoview');
};

const getJsonHolder = () => {
  apiClient.get('https://jsonplaceholder.typicode.com/users/1/todos')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};
 
</script>

<template>
  <div>
    <h1>Main Page</h1>
    <Button  label="Go to Todo List" @click="goToTodoList"></Button>
    <Button  label="Go to Todo View" @click="goToTodoView"></Button>
    <SplitButton label="Save" @click="save" :model="items" />
    <Button label="Toggle Dark Mode" @click="toggleDarkMode()" />

    <Button  label="GetDataJsonHolder" @click="getJsonHolder"></Button>
  </div>
</template>


<style>
/* 스타일을 여기에 추가하세요 */
div {
  background-color: #ffbbcc;
}
</style>
