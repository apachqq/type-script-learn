import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export function useLogout() {
    const store = useStore()
    const router = useRouter()

    const logout = () => {
        store.commit('logout')
        router.push('/login')
    }

    return {logout}
}
