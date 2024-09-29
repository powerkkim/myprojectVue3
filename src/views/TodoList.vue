<!-- TodoList.vue -->
<template>
  <div>Todo List Page</div>

  <Button label="Go to Main" @click="goToMain" />
  <Button label="할일목록 가져오기" @click="clickGetJsonHolder" />
  <div class="card">
    <DataTable :value="store.todos" paginator :rows="5" tableStyle="min-width: 50rem">
      <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
      <template #empty> No customers found. </template>
    </DataTable>
  </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from 'primevue/button';
import apiClient from '@/apis';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { useTodoStore } from '@/stores/todoStore';
import { storeToRefs } from 'pinia'

const columns = [
    { field: 'id', header: 'ID' },
    { field: 'title', header: '할일' },
    { field: 'userId', header: '사용자ID' },
    { field: 'completed', header: '실행여부' }
];

const store = useTodoStore()
// const { todos } = storeToRefs(store);

onMounted(() => {
  // store.$reset();
});

const router = useRouter();
const goToMain = () => {
  router.push('/');
};

const clickGetJsonHolder = () => {
  apiClient.get('https://jsonplaceholder.typicode.com/users/1/todos')
    .then(response => {
      console.log(response.data);
      store.todos = response.data;
      console.log(store.todos);
      console.log("aa");
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

</script>
