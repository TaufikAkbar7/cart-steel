<template>
  <div class="flex flex-col gap-3 col-span-2">
    <div class="flex flex-row justify-between items-center">
      <h1 class="font-bold text-4xl">Cart</h1>
      <div class="flex items-center gap-x-2">
        <input class="cursor-pointer w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          type="checkbox" id="select-all" name="select-all" value="true" v-model="cart_isSelectedAll" />
        <label class="text-base font-semibold" for="select-all">Select all ({{ cart_products.length }})</label>
      </div>
    </div>
    <div v-if="cart_products.length > 0" class="flex flex-col gap-y-2 mt-2 bg-white">
      <AppBaseCardProduct :key="product.id" v-for="product in cart_products" :product="product"
        v-model="cart_selectedItems" @on-delete="cart_onDeleteProduct" @on-quantity="cart_onQuantityProduct" />
    </div>
    <div v-else class="flex justify-center items-center">
      <h3>There are no items in your bag.</h3>
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject } from 'vue'

// @ts-ignore
const {
  cart_isSelectedAll,
  cart_onDeleteProduct,
  cart_onQuantityProduct,
  cart_products,
  cart_selectedItems
} = inject<any>('useCartService')
</script>
<style lang=""></style>
