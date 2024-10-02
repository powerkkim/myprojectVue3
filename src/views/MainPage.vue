<template>
	<div class="container">
		<h1 class="page-header">Today I Learned</h1>
		<div v-if="isLoading">로딩중...</div>
		<ul v-else>
			<PostListItem 
			v-for="postItem in postItems" 
			:key="postItem._id" 
			:postItem="postItem" 
			@refresh="getPosts" 
			/>
		</ul>

		<router-link to="/add">글쓰기</router-link>

	</div>

</template>

<script setup> 
import { fetchPosts } from '@/apis/posts'; 
import { onMounted,ref } from 'vue';
import PostListItem from '@/components/posts/PostListItem.vue';

const postItems = ref([]);
const isLoading = ref(false);


onMounted( () => {
	getPosts();
});

const getPosts = async () => {
	isLoading.value = true;
	const response = await fetchPosts();

	isLoading.value = false;
	postItems.value = response.data.posts;
};

</script>







<style>

</style>