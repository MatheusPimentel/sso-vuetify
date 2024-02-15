<template>
  <div class="flex justify-end container-none h-screen p-16 bg-gradient-to-r from-indigo-600 to-violet-950">
    <div class="bg-slate-200 rounded-lg h-full w-full sm:w-full md:w-1/2 lg:w-4/12">
      <login
        v-if="isLogin"
        @click-link="setLogin(false)"
      />
      <sign-up
        v-if="!isLogin"
        @click-link="setLogin(true)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import { ref } from 'vue'

const isLogin = ref(true)

const setLogin = (value: boolean) => {
  isLogin.value = value
}
</script>

<style scoped>

</style>
