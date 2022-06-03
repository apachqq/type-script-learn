<template>
    <div class="card">
        <h1>{{ title }}</h1>
        <button class="btn" @click="navigate">Открыть пользователей</button>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import {useNavigate} from '@/hooks/navigate'

    export default defineComponent({
        setup() {
            return {
                ...useNavigate()
            }
        }
    })
</script>
