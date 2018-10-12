import Helper from 'Admin/libraries/Helper'
import { callApiGeneral, callApiLearning, callApiRankingTotal } from '../api'
import { callApiRankingTop, callApiNewUsers, callApiLessons } from '../api'

const GENERAL_FETCH = 'general/fetch'
const LEARNING_FETCH = 'learning/fetch'
const RANKING_TOTAL_FETCH = 'ranking-total/fetch'
const RANKING_TOP_FETCH = 'ranking-top/fetch'
const NEW_USERS_FETCH = 'users/fetch'
const LESSON_FETCH = 'lessons/fetch'


const state = {
    general: {},
    learning: [],
    rankingTotal: {},
    rankings: {
        month: { beginner: [], junior: [], senior: [] },
        week: { beginner: [], junior: [], senior: [] },
    },
    users: [],
    lessons: [],
}

const mutations = {
    [GENERAL_FETCH](state, general) {
        return state.general = general
    },

    [LEARNING_FETCH](state, learning) {
        return state.learning = learning
    },

    [RANKING_TOTAL_FETCH](state, rankingTotal) {
        return state.rankingTotal = rankingTotal
    },

    [RANKING_TOP_FETCH](state, rankings) {
        return state.rankings = rankings
    },

    [NEW_USERS_FETCH](state, users) {
        return state.users = users
    },

    [LESSON_FETCH](state, lessons) {
        return state.lessons = lessons
    },
}

const actions = {
    async doFetchGeneral({ commit }) {
        let response = await callApiGeneral()
        if (response.status === 200) {
            return commit(GENERAL_FETCH, response.data)
        }

        return this._vm.$toaster.error(Helper.getFirstError(response))
    },

    async doFetchLearning({ commit }, params) {
        let response = await callApiLearning(params)
        if (response.status === 200) {

            return commit(LEARNING_FETCH, response.data)
        }

        return this._vm.$toaster.error(Helper.getFirstError(response))
    },

    async doFetchRankingTotal({ commit }) {
        let response = await callApiRankingTotal()
        if (response.status === 200) {
            return commit(RANKING_TOTAL_FETCH, response.data)
        }

        return this._vm.$toaster.error(Helper.getFirstError(response))
    },

    async doFetchRankingTop({ commit }) {
        let response = await callApiRankingTop()
        if (response.status === 200) {
            return commit(RANKING_TOP_FETCH, response.data)
        }

        return this._vm.$toaster.error(Helper.getFirstError(response))
    },

    async doFetchNewUsers({ commit }) {
        let response = await callApiNewUsers()
        if (response.status === 200) {
            return commit(NEW_USERS_FETCH, response.data.data)
        }

        return this._vm.$toaster.error(Helper.getFirstError(response))
    },

    async doFetchLessons({ commit }, params) {
        let response = await callApiLessons(params)
        if (response.status === 200) {
            return commit(LESSON_FETCH, response.data.data)
        }

        return this._vm.$toaster.error(Helper.getFirstError(response))
    },
}

export default {
    state,
    mutations,
    actions,
    namespaced: true,
}
