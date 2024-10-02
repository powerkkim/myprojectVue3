<template>
    <div class="contents">
      <form @submit.prevent="submitForm">
        <div>
          <label for="username">id</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">pw</label>
          <input type="text" id="password" v-model="password" />
        </div>
        <button type="submit" :disabled="!isFormValid">로그인</button>
        <p class="log-message">{{ logMessage }}</p>
      </form>
    </div>
</template>

<script setup>
  import { computed, ref } from 'vue';

  import { validateEmail } from '@/utils/validation'; 
  import router from '@/routers';
  import { userStore } from '@/stores/userStore';


  const user = userStore();

  const username = ref('');
  const password = ref('');
  const logMessage = ref('');

  const isFormValid = computed(() => {
    return validateEmail(username.value) && password.value.length >= 8;
  });

  const submitForm = async() => {
    try{
      const userData = {
        username: username.value,
        password: password.value,
      };

      await user.login(userData);
      // 메인페이지로 이동.
      router.push('/main');
    }
    catch(error){
      console.log(error)
      logMessage.value = `${error.response.data}`;
    }
    finally{
      initForm();
    }
  }

  const initForm = () =>  {
    username.value = '';
    password.value = '';
  }
</script>