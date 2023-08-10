<script lang="ts" setup>
import {toRef} from 'vue'
import {useField} from 'vee-validate'

const props = defineProps({
  value: {
    type: String,
    default: undefined,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})

const nameRef = toRef(props, 'name')

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
} = useField(nameRef, undefined, {
  initialValue: props.value,
})
</script>

<template>
  <scale-text-field
    :data-testid="nameRef"
    :helper-text="errorMessage"
    :invalid="errorMessage ? true : null"
    :label="label"
    :value="inputValue"
    @scale-blur="handleBlur"
    @scale-input="handleChange"
  />
</template>
