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
                <router-link
                        to="/login"
                        @click="logout"
                >
                    {{ this.$store.state.isAuth ? this.$store.state.logoutTitle : this.$store.state.loginTitle }}
                </router-link>
            </li>
        </ul>
    </header>
    <main class="container with-nav">
        <router-view></router-view>
    </main>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import {useLogout} from '@/hooks/logout'

    export default defineComponent({
        setup() {
            return {
                ...useLogout()
            }
        }
    })
</script>
