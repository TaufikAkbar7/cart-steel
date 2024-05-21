import Products from '@/data/products.json'
import { ref } from 'vue'
import type { IProduct } from '../interfaces/home.interface'
import { useCartStore } from '@/modules/cart/store'

export const useHomeService = () => {
  // define store
  const store = useCartStore()
  const home_products = ref<IProduct[]>(Products.data)
  const home_isOpenModal = ref(false)

  /**
   * @description handle open close modal
   */
  const home_onOpenCloseModal = () => {
    home_isOpenModal.value = !home_isOpenModal.value
  }

  /**
   * @description handle add product to cart
   */
  const home_onAddProductToCart = (id: string) => {
    home_onOpenCloseModal()
    store.addProductToCart(id)
  }

  return {
    home_products,
    home_onAddProductToCart,
    home_onOpenCloseModal,
    home_isOpenModal
  }
}
