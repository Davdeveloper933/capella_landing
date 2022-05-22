import Vue from "vue"
import VScrollLock from 'v-scroll-lock/dist/v-scroll-lock-no-dep.esm'
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock'

Vue.use(VScrollLock, {
  enableBodyScroll,
  disableBodyScroll,
})
