<template>
  <v-btn
    v-bind="props"
  >
    {{ label }}
  </v-btn>
</template>

<script setup lang="ts">
import { PropsAppBtn } from '@/components/appBtn/models/props'
const props = withDefaults(defineProps<PropsAppBtn>(), {
  block: true
})
</script>
