import type { App } from 'vue'
import { AppBaseFormGroup, AppBaseCardProduct, AppBaseButton } from './base'

export default (app: App): void => {
  // Base Components
  app.component('AppBaseFormGroup', AppBaseFormGroup)
  app.component('AppBaseCardProduct', AppBaseCardProduct)
  app.component('AppBaseButton', AppBaseButton)
  // Layout
}
