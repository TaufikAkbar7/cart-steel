<template lang="">
  <button
    :disabled="disabled"
    :class="[
      'w-full bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-transparent border border-black hover:text-black disabled:bg-transparent border border-black disabled:text-black disabled:cursor-not-allowed',
      customClass
    ]"
    @click="$emit('onClick')"
  >
    {{ name }}
  </button>
</template>
<script setup lang="ts">
interface IProps {
  name: string
  customClass?: string
  disabled?: boolean
}

withDefaults(defineProps<IProps>(), {
  name: 'click',
  customClass: '',
  disabled: false
})
</script>
<style lang=""></style>
