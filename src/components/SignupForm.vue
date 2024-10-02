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
			<div>
				<label for="nickname">nickname</label>
				<input type="text" id="nickname" v-model="nickname" />
			</div>
			<button type="submit" :disabled="!isFormValid">회원가입</button>
		</form>
		<p class="log">{{ logMessage }}</p>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { registerUser } from '@/apis/auth';
import { validateEmail } from '@/utils/validation';

const username = ref('');
const password = ref('');
const nickname = ref('');
const logMessage = ref('');
 

const isFormValid = computed(() => {
    return validateEmail(username.value) && password.value.length >= 8 && nickname.value.length >= 8;
  });


const initForm = () => {
	username.value = '';
	password.value = '';
	nickname.value = '';
}

const submitForm = async() => {
	const userData = {
		username: username.value,
		password: password.value,
		nickname: nickname.value,
	};
	
	const {data} = await registerUser(userData);
	console.log(data);
	logMessage.value = `${data.username}님 회원가입 완료`;
	initForm();
}



</script>