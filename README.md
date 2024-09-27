# vuejs 3 project 생성.

# AI 생성 프롬프트 예제.
```
vue3를 프로젝트를생성 구현 진행할거야. 

# 구성요소는 : 
1. 프로젝트 명 : myprojectVue3
2. 번들러 : vite 
3. 저장소 관리 : pinia 
4. route 관리 : vue-route
5. 네트워크 통신 : axios 
6. UI component : primevue 4.0.7
7. Composition API 사용
8. config : src 폴더를 @로 접근 가능하도록 설정.
9. 기본 route 구성 : main, todolist, todoview
10. routers, stores, views 로 폴더 구성

# 필수 : 구성요소의 규칙은 반드시 지켜야 해.
# 기본 소스 구현 :  
## 간단한 버튼으로 각 페이지를 이동할 수 있게 구현해줘.
## 버튼을 통해 jsonholder의 예제 API를 가져오는 예제를 구현해줘.
# 과정에서 생성된 소스는 다운로드 할 수 있게 zip 파일로 압축해줘.
# 답변은 한국어로 해줘
```

# 1. 프로젝트 생성
```
npm init vite@latest myprojectVue3 -- --template vue
cd myprojectVue3
npm install
```

# 2. Pinia 설치
```
npm install pinia
```

# 3. Vue Router 설치
```
npm install vue-router
```

# 4. Axios 설치
```
npm install axios
```

# 5. PrimeVue 설치
```
npm install primevue@4.0.7
npm install @primevue/themes
```

# 6. 프로젝트 구조 설정
```
프로젝트명/
├── src/
│ ├── apis/
│ ├── assets/
│ ├── components/
│ ├── routes/
│ │ └── index.html
│ ├── stores/
│ │ └── index.html 
│ ├── views/
│ │ ├── Main.vue
│ │ ├── Todolist.vue
│ │ └── Todoview.vue 
│ ├── App.vue 
│ ├── main.js 
│ └── style.css
├── index.html
├── jsconfig.json
├── .gitignore
├── README.md
├── vite.config.js
├── package-lock.json
└── package.json
```






# 4. Vue Router 설치






