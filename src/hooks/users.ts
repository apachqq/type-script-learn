import {ref, Ref} from 'vue'
import {useFetch} from '@/hooks/fetch'

export async function useUsers(): Promise<any> {
    const loading: Ref<boolean> = ref<boolean>(false)
    const {response: users, request} = useFetch('https://jsonplaceholder.typicode.com/users')

    if (!loading.value) {
        await request()
        loading.value = true
    }

    return {users}
}
