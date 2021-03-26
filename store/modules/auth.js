export default{
    actions: {

        async signUpMethod({ commit }, { name, email, password }){
            const response = await this.$axios.$post('http://80.87.192.59:5252/api/auth/register', 
            { name: name, email: email, password: password })
            if(response.success){
                //Сделать Redirect на Вход!
            }
        },

        async loginMethod({ commit }, { email, password }) {
            const response = await this.$axios.$post('http://80.87.192.59:5252/api/auth/login', 
            { email: email, password: password })
            if(response.success){
                this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.access_token;
                commit('updateDataAuth', response)
                commit('toggleIsAuth')
                this.$router.push('/')
                console.log(this.getAuthData)
            }
        },

        async logoutMethod({ commit }){
            const response = await this.$axios.$post('http://80.87.192.59:5252/api/auth/logout',{
                headers:{
                    'Authorization': `Bearer ${this.getAccessToken}`
                }
            })
            if(response.success){
                commit('cleanAuthData')
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
        }

    },
    state: {
        isAuth: false,
        authUserData: {}
    },
    getters: {
        getAuthData(state){
            return state.authUserData
        },
        getIsAuthData(){
            return state.isAuth
        },
        getAccessToken(){
            return state.access_token
        }
    }
}