<template>
<div class="container__wallet">
  <div class="wallet__total">
    <p>{{ $t('walletPage.totalBalance') }}</p>
    <p>{{ getTotal }}$</p>
  </div>
  <div v-if="allCards !== null" class="wallet__content">
    <div class="wallet__card"  v-for="(item, index) in allCards" :key="index">
      <div class="wallet__card__header">
        <span></span>
        <p>{{ item.title.toUpperCase() }}</p>
      </div>
      <div  class="wallet__card__content">
        <p>{{ item.balance }} {{ item.slug.toUpperCase() }}</p>
      </div>
      <div class="wallet__card__btn">
        <button>{{ $t('walletPage.walletCard.get') }}</button>
        <button>{{ $t('walletPage.walletCard.send') }}</button>
      </div>
  </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {

  middleware: ['auth'],
  computed: mapGetters(['allCards', 'getTotal']),

  methods:mapActions(['getWalletCards']),
  mounted(){
    if(this.allCards !== null)
      
      this.getWalletCards()
      
  }
}
</script>

<style>
  .container__wallet {
    max-width: 796px;
    max-height: 100%;
    margin: 0 auto;
    padding: 0 10px;
  }
  .wallet__total p:first-child{
    font-size: 16px;
    color: #fff;
  }
  .wallet__total p:last-child{
    font-weight: 700;
    font-size: 21px;
    color: transparent;    
	  -webkit-background-clip: text;
	  background-clip: text;
	  background-image: linear-gradient(241.43deg, #3B37F1 0%, #FF007D 100%);
    margin: 5px 0 28px 0
  }
  .wallet__total{
    max-width: 796px;
  }
  .wallet__content{
    display: flex;
    max-width: 796px;
    flex-wrap: wrap;
  }
  .wallet__card{
    margin: 0 15px 15px 0;
    width: 216px;
    height: 129px;
    padding: 14px;
    background: linear-gradient(241.43deg, #3B37F1 0%, #FF007D 100%);
    border-radius: 10px;
  }
  .wallet__card__content{
    font-size: 21px;
    font-weight: 700;
    margin-top: 12px;
    margin-bottom: 20px;
    color: #fff;
  }
  .wallet__card__header{
    display: flex;
    background-color: red;
    color: #fff;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    align-items: center;
  }
  .wallet__card__header p {
    font-size: 15px;
    margin-left: 25px;
  }
  .wallet__card__btn{
    display: flex;
  }
  .wallet__card__btn button{
    font-size: 11px;
    padding: 6px 11px;
    border-radius: 20px;
    border: 1px solid #fff;
    background-color: rgba(0, 0, 0, 0);
    color: #fff;
  }
  .wallet__card__btn button:hover{
    background-color: #fff;
    color: #1C1C1C;
    cursor: pointer;
  }
  .wallet__card__btn button:first-child{
    margin-right: 11px;
  }
  @media (max-width: 767px){
    .wallet__card__header{
      width: 100%;
      width: 29px;
      height: 29px;
    }
    .wallet__total{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .wallet__total p:first-child{
    font-size: 24px;
  }
  .wallet__total p:last-child{
    font-weight: 700;
    font-size: 24px;
    color: transparent;    
	  -webkit-background-clip: text;
	  background-clip: text;
	  background-image: linear-gradient(241.43deg, #3B37F1 0%, #FF007D 100%);
    margin: 6px 0 24px 0
  }

    .wallet__card__header p {
      margin-left: 35px;
      font-size: 17px;
    }
    .wallet__content{
      flex-direction: column;
      align-items: center;
    }
    .wallet__card{
      margin: 0 0 16px 0;
    }
    .wallet__card{
    font-size: 17px;
    width: 384px;
    height: 229px;
    padding: 14px;
    background: linear-gradient(241.43deg, #3B37F1 0%, #FF007D 100%);
    border-radius: 10px;
    }
    .wallet__card__content{
    font-size: 24px;
    font-weight: 700;
    margin-top: 33px;
    margin-bottom: 65px;
    color: #fff;
    }
    .wallet__card__btn button{
      padding: 12px 28px;
      font-size: 14px;
    }
    .wallet__card__btn button:first-child{
      margin-right: 18px;
    }
  }
  @media (max-width: 415px){
      .container__wallet {
    padding: 0;
  }
  }
</style>
