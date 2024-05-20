<template>
  <div id="form-group">
    <slot
      :isError="!!error"
      :isValid="isInvalid"
      :classes="{ error: !!error, success: getValue ? getValue && !isInvalid : false }"
    />
    <small class="message-error">{{ message }}</small>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Constants
import { VALIDATION_MESSAGE } from '@/app/constants'
import { BaseValidation } from '@vuelidate/core'
import { replaceParams } from '@/app/helper'

// Interfaces
interface IProps {
  isHideErrorMessage?: boolean
  name: string
  validators: BaseValidation
}

/**
 * @description Define props with default values and interfaces
 */
const props = withDefaults(defineProps<IProps>(), {
  isHideErrorMessage: false,
  name: '',
  validators: undefined
})

/**
 * @description Check if the form is invalid
 */
const isInvalid = computed(() => props.validators?.$dirty && props.validators?.$invalid)

/**
 * @description Check the error message and retrieve the first error
 */
const error = computed(() => {
  if (!props.validators && (props.validators as BaseValidation)?.$errors.length === 0) return null
  return props.validators?.$errors[0]
})

/**
 * @description Handle format error message should same as on the consants, Then don't forget to replace special character {attribute} with the value from the form
 */
const message = computed(() => {
  const errorValidator = error.value ? error?.value?.$validator : null

  if (!errorValidator) return ''

  return replaceParams(VALIDATION_MESSAGE[errorValidator] ?? `Error : ${errorValidator}`, {
    attribute: props.name,
    ...error?.value?.$params
  })
})

/**
 * @description Handle get value
 */
const getValue = computed(() => {
  if (!props.validators && (props.validators as BaseValidation)?.$errors.length === 0) return null
  return props.validators?.$model
})
</script>

<style lang="css" scoped>
.message-error {
  color: #ff8a00;
}
</style>
