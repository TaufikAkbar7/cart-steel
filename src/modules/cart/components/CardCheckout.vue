<template>
  <div class="col-span-2 lg:col-span-1">
    <div class="rounded-lg p-5 bg-white mt-1 lg:mt-[3.8rem]">
      <h3 class="text-xl font-semibold">Summary</h3>
      <div class="flex flex-col gap-y-1 border-b py-5 mt-1">
        <div class="flex flex-wrap justify-between items-center">
          <span class="text-sm sm:text-base">Subtotal</span>
          <span class="text-sm sm:text-base">{{ cart_calculateSubTotal }}</span>
        </div>
        <div class="flex flex-wrap justify-between items-center">
          <span class="text-sm sm:text-base">Estimated Delivery</span>
          <span class="text-sm sm:text-base">Rp 150,000</span>
        </div>
        <div class="flex flex-wrap justify-between items-center">
          <span class="text-sm sm:text-base">Estimated Duties and Taxes</span>
          <span>-</span>
        </div>
        <div class="flex flex-wrap justify-between items-center mt-2.5 border-t pt-3">
          <span>Total</span>
          <span class="text-base font-bold">{{ cart_calculateTotal }}</span>
        </div>
      </div>
      <AppBaseButton name="Checkout" custom-class="mt-6" :disabled="cart_selectedItems.length === 0"
        @on-click="cart_onOpenCloseModal" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject } from 'vue'

// @ts-ignore
const { cart_calculateSubTotal, cart_calculateTotal, cart_selectedItems, cart_onOpenCloseModal } =
  inject<any>('useCartService')
</script>
<style lang=""></style>
