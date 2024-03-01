<template>
  <v-form
    ref="form"
    v-model="validate"
    class="pr-3 pl-3"
  >
    <p class="text-5xl font-bold pt-5 mx-auto flex justify-center">Login</p>

    <app-input
      class="w-full pt-10 rounded-lg"
      :rules="rulesEmail"
      :label="'email'"
    />

    <app-input
      class="w-full"
      :rules="rulesSenha"
      :label="'password'"
      :type="'password'"
    />

    <app-btn
      class="bg-primary"
      :label="'Login'"
      @click="validateForm"
    />

    <p
      class="mt-5 mx-auto flex justify-end underline cursor-pointer text-blue-600"
      @click="clickLink"
    >
      Don't have an account? Sign-up here
    </p>
  </v-form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { validateEmail, validateRequired } from '@/util/validate'

const emit = defineEmits([
  'click-link'
])

const form = ref<HTMLFormElement>()
let validate = ref(false)


const isEmail = (email: string): boolean | string => validateEmail(email) || 'Email Inválido'
const isRequired = (email: string | null | undefined): boolean | string => validateRequired(email) || 'Campo Obrigatório'

const rulesEmail = computed(() => {
  return [
    (email: string): boolean | string => isEmail(email),
    (email: string | null | undefined): boolean | string => isRequired(email)
  ]
})

const rulesSenha = computed(() => {
  return [
    (senha: string | null | undefined): boolean | string => isRequired(senha)
  ]
})

const validateForm = async () => {
  if (!form.value) return
  const { valid } = await form.value.validate()

  if (valid) {
    alert('Formulário é válido')
    return
  }
  alert('Formulário é inválido')
}

const clickLink = () => {
  emit('click-link')
}

</script>

<style scoped>

</style>
