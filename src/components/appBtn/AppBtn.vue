<template>
  <v-btn
    :block="block"
    :color="color"
  >
    {{ label }}
  </v-btn>
</template>

<script setup lang="ts">
import { PropsAppBtn } from '@/components/appBtn/models/props'
withDefaults(defineProps<PropsAppBtn>(), {
  block: true
})
</script>

<style scoped>

</style>
