import { ref, watch, computed } from 'vue'
import Products from '@/data/products.json'
import type { IProduct, IQuantityProductProps } from '../interfaces/home.interface'
import { useCurrencyFormat } from '@/app/composables'

export const useHomeService = () => {
  const home_selectedItems = ref<string[]>([])
  const home_isSelectedAll = ref(false)
  const home_products = ref<IProduct[]>(Products.data)
  const home_isOpenModal = ref(false)

  watch(home_isSelectedAll, (value) => {
    if (value) {
      home_selectedItems.value = home_products.value.map((product) => product.id)
    } else {
      home_selectedItems.value = []
    }
  })

  /**
   * @description handle delete product
   */
  const home_onDeleteProduct = (id: string) => {
    home_products.value = home_products.value.filter((product: IProduct) => product.id !== id)
  }

  /**
   * @description handle flow increase/decrease quantity
   */
  const home_onQuantityProduct = ({ id, type }: IQuantityProductProps) => {
    const mappingProduct = home_products.value.map((product: IProduct) => {
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
    home_products.value = mappingProduct
  }

  const home_calculateSubTotal = computed(() => {
    const getSelectedItems = home_products.value.filter((product) =>
      home_selectedItems.value.includes(product.id)
    )
    const subTotal = getSelectedItems.reduce((total, item) => item.totalPrice + total, 0)
    return useCurrencyFormat(subTotal)
  })

  const home_calculateTotal = computed(() => {
    const getSelectedItems = home_products.value.filter((product) =>
      home_selectedItems.value.includes(product.id)
    )
    const total = getSelectedItems.reduce((total, item) => item.totalPrice + total, 0) + 150000
    return useCurrencyFormat(total)
  })

  const home_onOpenCloseModal = () => {
    home_isOpenModal.value = !home_isOpenModal.value
  }

  return {
    home_selectedItems,
    home_isSelectedAll,
    home_products,
    home_onDeleteProduct,
    home_onQuantityProduct,
    home_calculateSubTotal,
    home_calculateTotal,
    home_isOpenModal,
    home_onOpenCloseModal
  }
}
