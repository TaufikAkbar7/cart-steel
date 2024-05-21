import type { App } from 'vue'
import { AppBaseFormGroup, AppBaseCardProduct, AppBaseButton, AppBaseModal } from './base'
import { AppLayoutDefault } from './layouts'

export default (app: App): void => {
  // Base Components
  app.component('AppBaseFormGroup', AppBaseFormGroup)
  app.component('AppBaseCardProduct', AppBaseCardProduct)
  app.component('AppBaseButton', AppBaseButton)
  app.component('AppBaseModal', AppBaseModal)
  // Layout
  app.component('AppLayoutDefault', AppLayoutDefault)
}
