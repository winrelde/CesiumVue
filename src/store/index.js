import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        footerProperty: {},
        isShowAbout: false,
    },
    getters: {
        getFooterProperty: (state) => {
            return state.footerProperty
        },
        getIsShowAbout: (state) => {
            return state.isShowAbout
        },
    },
    mutations: {
        setFooterProperty(state, payload) {
            state.footerProperty = payload
        },
        setIsShowAbout(state, payload) {
            state.isShowAbout = payload
        },
    },
    actions: {
        setFooterPropertyAsync({ commit }, payload) {
            commit('setFooterProperty', payload)
        },
        setIsShowAbout({ commit }, payload) {
            commit('setIsShowAbout', payload)
        },
    },
    modules: {},
})