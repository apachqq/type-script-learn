import {onErrorCaptured, ref} from "vue";

export function useError() {
    const error = ref<null | unknown>(null)

    onErrorCaptured(e => {
        error.value = e
        return true
    })

    return {error}
}
