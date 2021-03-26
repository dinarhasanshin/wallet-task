<template>
    <div class="container__signUp">
        <div class="signUp__content">
            <p>{{ $t('nav.signUp') }}</p>
            <form @submit.prevent="signUpForm">
                <input type="text" v-model="name" :placeholder="$t('authPage.name')">
                <input type="text" v-model="email" :placeholder="$t('authPage.email')">
                <input type="text" v-model="password" :placeholder="$t('authPage.password')">
                <button class="singUp__button" type="submit">{{ $t('authPage.signUp') }}</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {

     methods:{
        ...mapActions(["signUpMethod"]),
        signUpForm(){
            let formData = {
                name: this.name,
                email: this.email,
                password: this.password,
            }
            this.signUpMethod(formData)
        }
    }
}
</script>

<style>
.signUp__content{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.signUp__content p {
    color: #fff;
    font-size: 21px;
    font-weight: 700;
    margin-bottom: 39px;
    margin-top: 30px;
}
.signUp__content form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.singUp__button{
    background: linear-gradient(88.29deg, #2F80ED 1.44%, #DE16CA 100%);
    border-radius: 3px;
    color: #fff;
    padding: 13px 50px;
    font-size: 14px;
    font-weight: 700;
    margin-top: 13px;
}
.singUp__button:hover{
    cursor: pointer;
}
.signUp__content form input{
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