<template>
    <div class="card">
        <form class="form-control" @submit.prevent="submit">
            <h1>Авторизуйтесь</h1>
            <div>
                <label for="email">Введите почту</label>
                <input type="email" id="email" v-model="email">
            </div>
            <div class="margin">
                <label for="password">Введите пароль</label>
                <input type="password" id="password" v-model="password">
            </div>
            <button class="btn margin">Войти</button>
        </form>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent({
        data() {
            return {
                email: '',
                password: ''
            }
        },
        computed: {
            isValid() {
                return this.email !== '' && this.password !== ''
            }
        },
        methods: {
            submit() {
                if (this.isValid) {
                    this.$store.commit('login')
                    this.$router.push('/')
                }
            }
        }
    })
</script>

<style scoped>
.margin {
    margin-top: 15px;
}
</style>
