<template>
    <header class="navbar">
        <h3 @click="this.$router.push('/')">Vue + TypeScript</h3>
        <ul class="navbar-menu">
            <li>
                <router-link to="/">Главная</router-link>
            </li>
            <li>
                <router-link to="/users">Пользователи</router-link>
            </li>
            <li>
                <router-link to="/login">{{ this.$store.state.isAuth ? 'Выйти' : 'Войти' }}</router-link>
            </li>
        </ul>
    </header>
    <main class="container with-nav">
        <router-view></router-view>
    </main>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent({
        methods: {
            workWithStore() {
                this.$store.state
            }
        }
    })
</script>
