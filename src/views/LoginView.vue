<template>
    <div class="card">
        <form class="form-control" @submit.prevent="submit">
            <h1>Авторизуйтесь</h1>
            <div>
                <label for="email">Введите почту</label>
                <input type="email" id="email" v-model.trim="form.email">
            </div>
            <div class="margin">
                <label for="password">Введите пароль</label>
                <input type="password" id="password" v-model.trim="form.password">
            </div>
            <button class="btn margin" :disabled="!isValid">Войти</button>
        </form>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import {useLogin} from '@/hooks/login'

    export default defineComponent({
        setup() {
            return {
                ...useLogin()
            }
        }
    })
</script>

<style scoped>
.margin {
    margin-top: 15px;
}
</style>
