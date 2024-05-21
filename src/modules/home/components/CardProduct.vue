<template>
  <div class="flex flex-col gap-y-3 bg-white rounded-lg shadow pb-3">
    <img class="object-contain w-full h-96" :src="product.image" />
    <div class="flex flex-col px-4 pb-2">
      <h5 class="font-medium">{{ product.name }}</h5>
      <h5 class="text-gray-400">{{ product.type }}</h5>
      <h5 class="font-medium mt-1">{{ useCurrencyFormat(product.price) }}</h5>
    </div>
    <div class="px-4">
      <AppBaseButton name="Add to Cart" @on-click="$emit('add', product.id)" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCurrencyFormat } from '@/app/composables'
import type { IProduct } from '@/modules/home/interfaces/home.interface'

interface IProps {
  product: IProduct
}

withDefaults(defineProps<IProps>(), {
  // @ts-ignore
  product: () => {
    return {
      id: '',
      name: '',
      type: '',
      price: 0,
      image: ''
    }
  }
})
</script>
<style lang=""></style>
