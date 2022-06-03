import {createStore} from 'vuex'

export default createStore({
    state: {
        isAuth: true
    },
    getters: {},
    mutations: {
        login(state) {
            state.isAuth = true
        },
        logout(state) {
            state.isAuth = false
        }
    },
    actions: {},
    modules: {}
})
