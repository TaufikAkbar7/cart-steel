import type { Ref, ComputedRef } from 'vue'
import type { IProduct } from '../../home/interfaces/home.interface'

export interface IQuantityProductProps {
  id: string
  type: 'up' | 'down'
}

export interface IUseCartServiceInject {
  cart_isSelectedAll: Ref<boolean>
  cart_onDeleteProduct: (id: string) => void
  cart_onQuantityProduct: ({ id, type }: IQuantityProductProps) => void
  cart_products: Ref<IProduct[]>
  cart_selectedItems: Ref<IProduct[]>
  cart_calculateSubTotal: ComputedRef<number>
  cart_calculateTotal: ComputedRef<number>
  cart_isOpenModal: Ref<boolean>
  cart_onOpenCloseModal: () => void
}

export interface ICartStateStore {
  selectedProducts: string[]
}
