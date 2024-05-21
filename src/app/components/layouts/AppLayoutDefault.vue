<template>
  <div>
    <nav className="bg-white p-5 flex flex-row items-center justify-between w-full text-white">
      <RouterLink to="/" class="font-bold text-xl text-black"> Cart Steel </RouterLink>
      <RouterLink to="/cart">
        <div
          v-if="store.getLengthSelectedProduct > 0"
          class="bg-red-500 rounded-full text-white text-xs font-semibold text-center py-0.5 px-1.5 absolute top-4 right-4"
        >
          {{ store.getLengthSelectedProduct }}
        </div>
        <v-icon name="bi-cart" scale="1.5" fill="#000" />
      </RouterLink>
    </nav>
    <slot />
  </div>
</template>
<script setup lang="ts">
import { useCartStore } from '@/modules/cart/store'

const store = useCartStore()
</script>
<style lang=""></style>
