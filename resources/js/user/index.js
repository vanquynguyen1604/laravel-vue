import Vue from 'vue'

import Helper from 'User/libraries/Helper'
import User from './User'
import router from './router'
import store from './store'

require('./libraries/plugins')
require('./libraries/config')

Vue.mixin({
    beforeCreate() {
        return this.$route && Helper.changeTitlePage(this.$route.name)
    },
})

new Vue({
    router,
    store,
    template: '<User />',
    components: { User },
}).$mount('#root')
