<template>
	<div class="container"> 
		<form @submit.prevent="submitForm">
			<div class="form-group">
				<label for="title">제목</label>
				<input type="text" class="form-control" id="title" v-model="title" required>
			</div>
			<div class="form-group">
				<label for="content">내용</label>
				<textarea class="form-control" id="content" rows="5" v-model="contents" required></textarea>
				<p class="validation-text warning" v-if="!isContentsValid">Contents length must be less than 200</p>
			</div>
			<button type="submit" class="btn btn-primary" :disabled="!isContentsValid">Create</button>
		</form>
		<p class="log-message">{{ logMessage }}</p>
	</div>
</template>

<script setup>
import { ref , computed} from 'vue'; 
import { createPost } from '@/apis/posts';
import router from '@/routers';

const title =  ref('')
const contents =  ref('')
const logMessage = ref('');

const isContentsValid = computed(()=> {
	return contents.value.length <= 200;
})

const submitForm = async () => {
	try{
			await createPost( { title: title.value, contents: contents.value });
			router.push('/main');
    }
    catch(error){
      console.log(error)
      logMessage.value = `${error.response.data.message}`;
    }
    finally{
      // initForm();
    }
}


</script>

