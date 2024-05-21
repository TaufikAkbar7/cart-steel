import { ref, watch, computed } from 'vue'
import Products from '@/data/products.json'
import type { IQuantityProductProps } from '../interfaces/cart.interface'
import { useCurrencyFormat } from '@/app/composables'
import type { IProduct } from '../../home/interfaces/home.interface'
import { useCartStore } from '../store'

export const useCartService = () => {
  // define store
  const store = useCartStore()

  const cart_selectedItems = ref<string[]>([])
  const cart_isSelectedAll = ref(false)
  const cart_products = ref<IProduct[]>([])
  const cart_isOpenModal = ref(false)

  watch(cart_isSelectedAll, (value) => {
    if (value) {
      cart_selectedItems.value = cart_products.value.map((product) => product.id)
    } else {
      cart_selectedItems.value = []
    }
  })

  watch(
    store,
    (value) => {
      const getSelectedItems = Products.data.filter((product: IProduct) =>
        value.selectedProducts.includes(product.id)
      )
      cart_products.value = getSelectedItems
    },
    { immediate: true }
  )

  /**
   * @description handle delete product
   */
  const cart_onDeleteProduct = (id: string) => {
    cart_products.value = cart_products.value.filter((product: IProduct) => product.id !== id)
    store.deleteProductCart(id)
  }

  /**
   * @description handle flow increase/decrease quantity
   */
  const cart_onQuantityProduct = ({ id, type }: IQuantityProductProps) => {
    const mappingProduct = cart_products.value.map((product: IProduct) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: type === 'up' ? product.quantity++ : product.quantity--,
          totalPrice:
            type === 'up' ? product.totalPrice + product.price : product.totalPrice - product.price
        }
      }
      return product
    })
    cart_products.value = mappingProduct
  }

  /**
   * @description handle calculate subtotal
   */
  const cart_calculateSubTotal = computed(() => {
    const getSelectedItems = cart_products.value.filter((product) =>
      cart_selectedItems.value.includes(product.id)
    )
    const subTotal = getSelectedItems.reduce((total, item) => item.totalPrice + total, 0)
    return useCurrencyFormat(subTotal)
  })

  /**
   * @description handle calculate total
   */
  const cart_calculateTotal = computed(() => {
    const getSelectedItems = cart_products.value.filter((product) =>
      cart_selectedItems.value.includes(product.id)
    )
    const total = getSelectedItems.reduce((total, item) => item.totalPrice + total, 0) + 150000
    return useCurrencyFormat(total)
  })

  const cart_onOpenCloseModal = () => {
    cart_isOpenModal.value = !cart_isOpenModal.value
  }

  return {
    cart_selectedItems,
    cart_isSelectedAll,
    cart_products,
    cart_onDeleteProduct,
    cart_onQuantityProduct,
    cart_calculateSubTotal,
    cart_calculateTotal,
    cart_isOpenModal,
    cart_onOpenCloseModal
  }
}
