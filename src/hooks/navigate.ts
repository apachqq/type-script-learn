import {useRouter} from 'vue-router'

export function useNavigate() {
    const router = useRouter()

    const navigate = (): void => {
        router.push('/users')
    }

    return {
        title: 'Как Vue работает с TypeScript?',
        navigate
    }
}
