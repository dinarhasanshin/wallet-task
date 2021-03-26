<template>
    <div class="container">
        <h1 class="header_error">Error</h1>
        <nuxt-link :to="localePath('/')">Вернуться назад</nuxt-link>
    </div>
</template>


<script>
export default {
    layout: 'empty',
}
</script>

<style>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.header_error {
    color: red;
}
</style>