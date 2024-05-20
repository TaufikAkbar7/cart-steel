<template lang="">
    <button :class="['w-full bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-transparent border border-black hover:text-black', customClass]" @click="$emit('onClick')">
        {{name}}
    </button>
</template>
<script setup lang="ts">
interface IProps {
    name: string
    customClass: string
}

withDefaults(defineProps<IProps>(), {
    name: 'click',
    customClass: ''
})

</script>
<style lang="">
    
</style>