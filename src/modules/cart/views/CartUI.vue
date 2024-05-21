<template>
  <section class="p-10">
    <div class="grid grid-cols-1 gap-x-5 gap-y-4 lg:grid-cols-3">
      <CartContent />
      <CardCheckout />
    </div>

    <AppBaseModal
      :show="cart_isOpenModal"
      description="Successfully save cart data"
      @on-close="cart_onOpenCloseModal"
    />
  </section>
</template>
<script lang="ts" setup>
import { provide } from 'vue'
import { useCartService } from '../services/useCart.service'
import { CardCheckout, CartContent } from '../components'

const {
  cart_isSelectedAll,
  cart_onDeleteProduct,
  cart_onQuantityProduct,
  cart_products,
  cart_selectedItems,
  cart_calculateSubTotal,
  cart_calculateTotal,
  cart_isOpenModal,
  cart_onOpenCloseModal
} = useCartService()

provide('useCartService', {
  cart_isSelectedAll,
  cart_onDeleteProduct,
  cart_onQuantityProduct,
  cart_products,
  cart_selectedItems,
  cart_calculateSubTotal,
  cart_calculateTotal,
  cart_isOpenModal,
  cart_onOpenCloseModal
})
</script>
<style lang=""></style>
