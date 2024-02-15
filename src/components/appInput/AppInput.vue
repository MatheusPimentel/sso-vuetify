<template>
  <v-text-field
    :rules="rules"
    :label="label"
    :required="required"
    :type="type"
    :density="density"
  />
</template>

<script setup lang="ts">
import { PropsAppInput } from '@/components/appInput/models/props'
withDefaults(defineProps<PropsAppInput>(), {
  required: false,
  density: 'comfortable',
  type: 'text'
})

</script>

<style scoped>

</style>
