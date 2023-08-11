<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['testFunction'])

const testFunction = () => {
  emit('testFunction')
}
</script>
<template>
  <scale-button :data-testid="name" @click="testFunction"> {{ label }}</scale-button>
</template>