import  Vue from "vue"
import Vuex from "vuex"
import walletCards from './modules/walletCards'
import auth from './modules/auth'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    namespaced: true,
    actions: {

        async signUpMethod({ commit }, { name, email, password }){
            const response = await this.$axios.$post('http://80.87.192.59:5252/api/auth/register', 
            { name: name, email: email, password: password })
            if(response.success){
                this.$router.push(this.localePath('/auth/signIn'))
            }
        },

        async loginMethod({ commit }, { email, password }) {
            const response = await this.$axios.$post('http://80.87.192.59:5252/api/auth/login', 
            { email: email, password: password })
            if(response.success){
                // this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.access_token;
                commit('updateDataAuth', response)
                commit('toggleIsAuth')
                this.$router.push(this.localePath('/'))
                this.$wait.end('SignInWait')
            }
        },

        async logoutMethod({ commit }){
            const response = await this.$axios.$post('http://80.87.192.59:5252/api/auth/logout',{
                headers:{
                    'Authorization': `Bearer ${this.state.authUserData.access_token}`
                }
            })
            if(response.success){
                commit('cleanAuthData')
            }   
        },
        async getWalletCards({ commit }){
            const response = await this.$axios.$get('http://80.87.192.59:5252/api/wallet',{
                headers:{
                    'Authorization': `Bearer ${this.state.authUserData.access_token}`
                }
            })
            if(response.success){
                commit('updateWalletCards', response.wallets)
                commit('updateBalance', response.balance)
            }
        },

    },
    mutations: {

        updateDataAuth(state, payload){
            state.authUserData = payload
        },

        toggleIsAuth(state){
            state.isAuth = !this.state.isAuth
        },

        cleanAuthData(state){
            state.isAuth = ''
        },
        updateWalletCards(state, payload){
            state.walletCards = payload
        },
        updateBalance(state, payload){
            state.balance = payload
        }

    },
    state: {
        isAuth: false,
        balance: '',
        walletCards: {},
        authUserData: {}
    },
    getters: {
        getAuthData(state){
            return state.authUserData
        },
        getIsAuthData(state){
            return state.isAuth
        },
        getAccessToken(state){
            return state.access_token
        },
        allCards(state){
            return state.walletCards
        },
        getTotal(state){
            return state.balance
        }
    }
})

export default store