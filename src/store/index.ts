import {createStore} from 'vuex'

export default createStore({
    state: {
        isAuth: false,
        loginTitle: 'Войти',
        logoutTitle: 'Выйти'
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
