<template>
  <v-form ref="form" v-model="formValid" class="px-3">
    <p class="text-5xl font-bold pt-5 flex justify-center">
      {{ $t('pages.login.signup.fields.title') }}
    </p>

    <app-input
      class="w-full pt-10 rounded-lg"
      required
      :label="$t('pages.login.signup.fields.name')"
    />

    <app-input
      class="w-full rounded-lg"
      required
      :rules="rulesEmail"
      :label="$t('pages.login.signup.fields.email')"
    />

    <app-input
      class="w-full"
      required
      :label="$t('pages.login.signup.fields.password')"
      type="password"
    />

    <app-btn
      class="bg-primary"
      :label="$t('pages.login.signup.buttons.signUp')"
      @click="validateForm"
    />

    <p
      class="mt-5 flex justify-end underline cursor-pointer text-blue-600"
      @click="$emit('click-link')"
    >
      {{ $t('pages.login.signup.fields.signIn') }}
    </p>
  </v-form>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
import {isEmail} from '@/util/rules'

defineEmits(['click-link'])

const form = ref<HTMLFormElement | null>(null)
const formValid = ref(false)

const rulesEmail = computed(() => [isEmail])

const validateForm = async () => {
  if (!form.value) return
  const { valid } = await form.value.validate()

  alert(valid ? 'Formulário é válido' : 'Formulário é inválido')
}
</script>

<style scoped>
</style>
