import Helper from 'User/libraries/Helper'
import router from 'User/router'

import { apiGetAuth, apiChangePassword } from "../api"

const AUTH_SET = 'set'

const state = {
    user: {},
}

const mutations = {
    [AUTH_SET](state, user = {}) {
        state.user = user
    },
}

const actions = {
    async doGetAuth({ commit }) {
        let response = await apiGetAuth()
        if (response.status === 200) {
            return commit(AUTH_SET, response.data.user)
        }

        return this._vm.$toaster.error(Helper.getFirstError(response))
    },

    async doChangePassword({}, params) {
        this.dispatch('loading/doShowLoading')
        let response = await apiChangePassword(params);
        this.dispatch('loading/doHiddenLoading')
        if (response.status === 200) {
            this._vm.$toaster.success(response.data.message)

            return router.push('/me/profile')
        }
        this._vm.$toaster.error(Helper.getFirstError(response))
        let errors = response.response.data.errors;
        Object.keys(errors).forEach((i) => this._vm.$toaster.error(errors[i][0]));
    },
}

export default {
    state,
    mutations,
    actions,
    namespaced: true,
}
