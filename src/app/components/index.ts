import type { App } from 'vue'
import { AppBaseCardProduct, AppBaseButton, AppBaseModal } from './base'
import { AppLayoutDefault } from './layouts'

export default (app: App): void => {
  // Base Components
  app.component('AppBaseCardProduct', AppBaseCardProduct)
  app.component('AppBaseButton', AppBaseButton)
  app.component('AppBaseModal', AppBaseModal)
  // Layout
  app.component('AppLayoutDefault', AppLayoutDefault)
}
