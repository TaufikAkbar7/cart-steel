<template>
  <section class="p-10 flex flex-wrap justify-center gap-5">
    <CardProduct
      :key="product.id"
      v-for="product in home_products"
      :product="product"
      @add="home_onAddProductToCart"
    />

    <AppBaseModal
      :show="home_isOpenModal"
      description="Successfully add product to cart"
      @on-close="home_onOpenCloseModal"
    />
  </section>
</template>
<script lang="ts" setup>
import { provide } from 'vue'
import { useHomeService } from '../services/useHome.service'
import CardProduct from '../components/CardProduct.vue'

const { home_products, home_onAddProductToCart, home_onOpenCloseModal, home_isOpenModal } =
  useHomeService()

provide('useHomeService', {
  home_products,
  home_onAddProductToCart,
  home_onOpenCloseModal,
  home_isOpenModal
})
</script>
<style lang=""></style>
