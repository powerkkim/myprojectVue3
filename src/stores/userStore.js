import { defineStore } from 'pinia' 
import { ref } from 'vue'
import { saveAuthToCookie, saveUserToCookie, getAuthFromCookie, getUserFromCookie  } from '@/utils/cookies';
import { loginUser } from '@/apis/auth';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: []
  }) 
})

export const userStore = defineStore('user', () => {
  const username = ref(getUserFromCookie() || '');
  const token = ref(getAuthFromCookie() || '');

  const setUsername = ( newUsername ) => {
    console.log( "newUsername:" + newUsername)
    username.value = newUsername
  }

  const clearUsername = () => {
    username.value = ''
  }

  const setToken = (newToken) => {
    token.value = newToken;
    console.log( "token:" + token)
    console.log( "token.value:" + token.value)
  }

  const clearToken = () => {
    token.value = '';
  }

  const getToken = ()=>{
    console.log( "token.value:" + token.value)
    return token.value;
  }

  const login = async(userData)=>{
    const {data} = await loginUser(userData);
    setUsername( data.user.username );
    setToken( data.token );
    saveUserToCookie(data.user.username);
    saveAuthToCookie(data.token)
  }

  const isLogin = () => {
    return username.value !== '' && token.value !== '';
  }

  return { username, setUsername, clearUsername, setToken, getToken, login, clearToken, isLogin}
})


