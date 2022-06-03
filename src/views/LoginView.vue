<template>
    <div class="card">
        <form class="form-control">
            <h1>Авторизуйтесь</h1>
            <div>
                <label for="email">Введите почту</label>
                <input type="email" id="email">
            </div>
            <div>
                <label for="password">Введите пароль</label>
                <input type="password" id="password">
            </div>
            <button class="btn">Войти</button>
        </form>
    </div>
</template>

<style scoped>
.btn {
    margin-top: 15px;
}
</style>
