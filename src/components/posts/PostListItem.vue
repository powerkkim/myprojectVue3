<template>
		<li >
			<div class="post-title">{{ postItem.title }}</div>
			<div class="post-contents">{{ postItem.contents }}</div>
			<div class="post-item">{{ formatDate(postItem.createdAt) }}</div>
			<button @click="editItem">수정</button>
			<button @click="deleteItem">삭제</button>
		</li>
</template>

<script setup>
import { deletePost } from '@/apis/posts';
import router from '@/routers';
import { computed } from 'vue';

const formatDate = (value) => {
  const date = new Date(value)
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
}

const props = defineProps({
	postItem: {
		type: Object,
		required: true,
	},
});

const emit = defineEmits(['refresh']);

const deleteItem = async () => {

	if(confirm('정말로 삭제하시겠습니까?')){
		console.log('삭제');	
		await deletePost(props.postItem._id);
		emit('refresh');	
	}

}

const editItem = () => {
	const id = props.postItem._id;

	router.push(`/post/${id}`);
}

</script>


