import type { Ref, ComputedRef } from 'vue'

export interface IQuantityProductProps {
  id: string
  type: 'up' | 'down'
}

export interface IUseHomeServiceInject {
  home_isSelectedAll: Ref<boolean>
  home_onDeleteProduct: (id: string) => void
  home_onQuantityProduct: ({ id, type }: IQuantityProductProps) => void
  home_products: Ref<IProduct[]>
  home_selectedItems: Ref<IProduct[]>
  home_calculateSubTotal: ComputedRef<number>
  home_calculateTotal: ComputedRef<number>
}

export interface IProduct {
  id: string
  name: string
  type: string
  colors: string
  price: number
  totalPrice: number
  image: string
  quantity: number
}
