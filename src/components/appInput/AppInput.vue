<template>
  <v-text-field
    v-bind="props"
    :rules="rules"
  />
</template>

<script setup lang="ts">
import { PropsAppInput } from '@/components/appInput/models/props'

const props = withDefaults(defineProps<PropsAppInput>(), {
  required: false,
  density: 'comfortable',
  type: 'text'
})
</script>
