import Vue from 'vue'
import VueRouter from 'vue-router'
import VueX from 'vuex'
import Toaster from 'v-toaster'
import VuejsDialog from 'vuejs-dialog'
import vPage from 'v-page'

import 'v-toaster/dist/v-toaster.css'

Vue.use(VueRouter)
Vue.use(VueX)
Vue.use(Toaster, { timeout: 5000 })
Vue.use(VuejsDialog)
Vue.use(vPage)
