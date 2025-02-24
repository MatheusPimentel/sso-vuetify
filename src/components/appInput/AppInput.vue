<template>
  <v-text-field
    v-bind="props"
    :rules="computedRules"
  />
</template>

<script setup lang="ts">
import { PropsAppInput } from '@/components/appInput/models/props'
import { lang } from '@/util/lang'

const props = withDefaults(defineProps<PropsAppInput>(), {
  required: false,
  density: 'comfortable',
  type: 'text',
  rules: []
})

const computedRules = computed(() => {
  const rules = [...props.rules]

  if (props.required) {
    rules.unshift((value: string) => !!value || lang('components.app-input.validations.required'))
  }

  return rules
})
</script>
