const LOADING_SET = 'set'

const state = {
    show: false,
}

const mutations = {
    [LOADING_SET](state, value = false) {
        state.show = value
    },
}

const actions = {
    doShowLoading({ commit }) {
        return commit(LOADING_SET, true)
    },

    doHiddenLoading({ commit }) {
        return commit(LOADING_SET, false)
    },
}

export default {
    state,
    mutations,
    actions,
    namespaced: true,
}
