<template>
    <section class="p-10">
        <div class="grid grid-cols-1 gap-x-5 gap-y-4 lg:grid-cols-3">
            <CartContent />
            <CardCheckout />
        </div>
    </section>
</template>
<script lang="ts" setup>
import { provide } from 'vue'
import { useHomeService } from '../services'
import { CardCheckout, CartContent } from '../components'

const { home_isSelectedAll, home_onDeleteProduct, home_onQuantityProduct, home_products, home_selectedItems, home_calculateSubTotal,
    home_calculateTotal } = useHomeService()

provide('useHomeService', {
    home_isSelectedAll, home_onDeleteProduct, home_onQuantityProduct, home_products, home_selectedItems, home_calculateSubTotal,
    home_calculateTotal
})

</script>
<style lang=""></style>
