<template>
    <div class="card">
        <h1>Пользователи</h1>
        <p style="color: red" v-if="error">{{ error }}</p>
        <Suspense v-else>
            <template #default>
                <user-list></user-list>
            </template>
            <template #fallback>
                <p>Loading...</p>
            </template>
        </Suspense>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import UserList from '@/components/UserList.vue'
    import {useError} from '@/hooks/error'

    export default defineComponent({
        setup() {
            return {
                ...useError()
            }
        },
        components: {UserList}
    })
</script>
