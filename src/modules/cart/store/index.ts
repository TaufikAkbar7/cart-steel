import { defineStore } from 'pinia'
import type { ICartStateStore } from '../interfaces/cart.interface'

export const useCartStore = defineStore('cart', {
  state: (): ICartStateStore => ({
    selectedProducts: []
  }),
  getters: {
    getLengthSelectedProduct: (state) => state.selectedProducts.length
  },
  actions: {
    addProductToCart(id: string) {
      this.selectedProducts.push(id)
    },
    deleteProductCart(id: string) {
      this.selectedProducts = this.selectedProducts.filter((productId: string) => productId !== id)
    }
  },
  persist: {
    key: 'cart-product'
  }
})
