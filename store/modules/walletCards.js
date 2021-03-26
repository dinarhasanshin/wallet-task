export default{
    actions: {
        async getWalletCards({ commit }){
            const response = await this.$axios.$get('http://80.87.192.59:5252/api/wallet',{
                // headers:{
                //     'Authorization': `Bearer ${}`
                // }
            })
            if(response.success){
                debugger
                commit('updateWalletCards', response.wallets)
                commit('updateBalance', response.balance)
            }
        },
    },
    mutations: {
        updateWalletCards(state, payload){
            state.walletCards = payload
        },
        updateBalance(state, payload){
            state.balance = payload
        }
    },
    state: {
        balance: '',
        walletCards: 
        [
            // {name: 'ETHERIUM', course: '0.10954 ETH'}, 
            // {name: 'BITCOIN', course: '0.10454 BTC'},
            // {name: 'BITCOIN', course: '0.10454 BTC'},
            // {name: 'BITCOIN', course: '0.10454 BTC'}
        ]
    },
    getters: {
        allCards(state){
            return state.walletCards
        },
        getTotal(state){
            return state.balance
        }
    }
}