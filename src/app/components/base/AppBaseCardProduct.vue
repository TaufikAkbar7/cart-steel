<template>
  <div class="flex flex-col gap-x-5 border-t-2 border-gray py-5 items-start px-5 sm:flex-row sm:items-center">
    <input class="cursor-pointer w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
      type="checkbox" :id="product.name" :name="product.name" :value="product.id" v-model="value" />
    <div class="py-3.5 flex justify-center w-full sm:py-0 sm:block sm:w-auto">
      <img :src="product.image" class="w-32 object-contain rounded-lg sm:w-28" />
    </div>
    <div class="flex flex-col w-full gap-y-5">
      <div class="flex flex-col">
        <div class="flex flex-wrap justify-between">
          <h5 class="font-medium text-sm sm:text-base">{{ product.name }}</h5>
          <h5 class="font-bold text-sm sm:text-base">
            {{ useCurrencyFormat(product.totalPrice) }}
          </h5>
        </div>
        <div class="flex flex-col">
          <span class="text-gray-400 text-sm sm:text-base">{{ product.type }}</span>
          <span class="text-gray-400 text-sm sm:text-base">{{ product.colors }}</span>
        </div>
      </div>
      <div class="flex flex-wrap justify-between items-center gap-y-3">
        <div class="flex flex-wrap items-center gap-x-5">
          <select name="dropdown" id="dropdown" class="border border-gray rounded-lg py-1 px-2.5">
            <option :key="size" v-for="size in sizes" :value="size">{{ size }}</option>
          </select>
          <div class="border border-gray flex flex-row gap-x-3 items-center py-1 px-2.5 rounded-lg">
            <button :disabled="quantity <= 1" class="disabled:cursor-not-allowed"
              @click.stop="onClickQuantity({ id: product.id, type: 'down' })">
              <v-icon name="hi-minus" fill="#969696" />
            </button>
            <span>{{ quantity }}</span>
            <button @click.stop="onClickQuantity({ id: product.id, type: 'up' })">
              <v-icon name="bi-plus-lg" fill="#969696" />
            </button>
          </div>
        </div>
        <button class="text-[#969696] font-semibold" @click="emits('onDelete', product.id)">
          <v-icon name="fa-trash" fill="#969696" />
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { IProduct } from '@/modules/home/interfaces/home.interface'
import { useCurrencyFormat } from '@/app/composables'

interface IProps {
  product: IProduct
  modelValue: string[]
}

const props = withDefaults(defineProps<IProps>(), {
  // @ts-ignore
  product: () => {
    return {
      name: '',
      type: '',
      colors: '',
      price: 0,
      image: ''
    }
  },
  modelValue: () => []
})
const emits = defineEmits(['update:modelValue', 'onDelete', 'onQuantity'])

const sizes = ['40.5', '41', '42', '43', '44', '45']
const quantity = ref(1)

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  }
})

const onClickQuantity = ({ id, type }: { id: string; type: 'up' | 'down' }) => {
  if (type === 'up') {
    quantity.value++
    emits('onQuantity', { id, type })
  } else {
    quantity.value--
    emits('onQuantity', { id, type })
  }
}
</script>
<style lang=""></style>
