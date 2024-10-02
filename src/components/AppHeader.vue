<template>
	<header> 
		<div>
			<router-link to="/" > TIL </router-link>
		</div>
		<div class="navigations">
			<template v-if="!user.username">
				<router-link to="/login">로그인</router-link> | 
				<router-link to="/signup">회원가입</router-link>
			</template>
			<template v-else>
				<span>{{ user.username }}</span>
				<button @click="clickLogout">로그아웃 </button>
			</template>
	</div>
	</header> 

</template>

<script setup> 
import { userStore } from '@/stores/userStore';
import router from '@/routers';
import { deleteCookie } from '@/utils/cookies';

const user = userStore();


const clickLogout = ()=> {
	console.log( "로그아웃 버튼 클릭 ");
	user.clearUsername();
	user.clearToken();
	deleteCookie('authToken');
	deleteCookie('user');
	router.push('/login');
}

</script>