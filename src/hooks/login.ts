import {reactive, computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export function useLogin() {
    const form = reactive({
        email: '',
        password: ''
    })

    const store = useStore()
    const router = useRouter()

    const submit = () => {
        if (isValid) {
            store.commit('login')
            router.push('/')
        }
    }

    const isValid = computed(() => {
        return form.email && form.password
    })

    return {form, submit, isValid}

}
