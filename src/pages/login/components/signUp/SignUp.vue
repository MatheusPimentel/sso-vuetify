<template>
  <v-form
    ref="form"
    v-model="validate"
    class="pr-3 pl-3"
  >
    <p class="text-5xl font-bold pt-5 mx-auto flex justify-center">{{ $t('pages.login.signup.fields.title') }}</p>

    <app-input
      class="w-full pt-10 rounded-lg"
      :rules="rulesRequired"
      :label="$t('pages.login.signup.fields.name')"
    />

    <app-input
      class="w-full rounded-lg"
      :rules="rulesEmail"
      :label="$t('pages.login.signup.fields.email')"
    />

    <app-input
      class="w-full"
      :rules="rulesRequired"
      :label="$t('pages.login.signup.fields.password')"
      :type="'password'"
    />

    <app-btn
      class="bg-primary"
      :label="$t('pages.login.signup.buttons.signUp')"
      @click="validateForm"
    />

    <p
      class="mt-5 mx-auto flex justify-end underline cursor-pointer text-blue-600"
      @click="clickLink"
    >
      {{ $t('pages.login.signup.fields.signIn') }}
    </p>
  </v-form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import {isEmail, isRequired} from '@/util/rules'

const emit = defineEmits([
  'click-link'
])

let validate = ref(false)
const form = ref<HTMLFormElement>()

const rulesEmail = computed(() => {
  return [
    isEmail,
    isRequired
  ]
})

const rulesRequired = computed(() => {
  return [
    isRequired
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
