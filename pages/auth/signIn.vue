<template>
    <div class="container__login">
        <div class="login__content">
            <p>{{ $t('nav.signIn') }}</p>
            <form @submit.prevent="checkForm">
                <input name="email" v-model="email" type="text" :placeholder="$t('authPage.email')">
                <input name="password" v-model="password" type="text"  :placeholder="$t('authPage.password')">
                <button type="submit"><v-wait for='SignInWait'><Spinner slot="waiting"/>{{ $t('authPage.signIn') }}</v-wait></button>
            </form>
        </div>
    </div>
</template>



<script>
import { mapActions } from 'vuex';
export default {
    methods:{
        ...mapActions(["loginMethod"]),
        checkForm(){
            let formData = {
                email: this.email,
                password: this.password,
            }
            this.$wait.start('SignInWait')
            this.loginMethod(formData)

        }
    }
}
</script>

<style>
.login__content{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.login__content p {
    color: #fff;
    font-size: 21px;
    font-weight: 700;
    margin-bottom: 39px;
    margin-top: 30px;
}
.login__content form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.login__content form button{
    background: linear-gradient(88.29deg, #2F80ED 1.44%, #DE16CA 100%);
    border-radius: 3px;
    color: #fff;
    padding: 13px 100px;
    font-size: 14px;
    font-weight: 700;
    margin-top: 13px;
}
.login__content form button:hover{
    cursor: pointer;
}
.login__content form input{
    width: 241px;
    height: 41px;
    margin-bottom: 17px;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 3px;
    background-color: #1C1C1C;
    color: #fff;
    padding-left: 12px;
}

/* Стили для placeholder */
input[type="text"]::-webkit-input-placeholder {
    color: #fff;
} 
input[type="text"]::-moz-placeholder {
    color: #fff;
}
input[type="text"]:focus::-webkit-input-placeholder {
    color: transparent;
} 
input[type="text"]:focus::-moz-placeholder {
    color: transparent;
}
</style>