import Vue from 'vue'
import VueX from 'vuex'
Vue.use(VueX)

import loading from '../views/loading/store'
import auth from '../views/auth/store'

export default new VueX.Store({
    modules: {
        loading,
        auth,
    },
})
