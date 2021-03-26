<template>
<div class="wrapper">
  <header>
    <div class="container">
      <div class="header__body">
        <div class="header__logo">
          <nuxt-link :exact=true :to="localePath('/')">
            <span class="logo"><span class="logo__strong">BIG</span>WALLET</span>
          </nuxt-link>
        </div>
        <div class="header__burger" id="wrapper__burger" @click="menuWrapper">
          <span></span>
        </div> 
        <nav class="header__menu" id="wrapper__menu">
          <ul class="header__list">
            <li @click="menuWrapper"><nuxt-link class="header__link" :to="localePath('/auth/signIn')">{{ $t('nav.signIn') }}</nuxt-link></li>
            <li @click="menuWrapper"><nuxt-link class="header__link" :to="localePath('/auth/signUp')">{{ $t('nav.signUp') }}</nuxt-link></li>
            <li @click="menuWrapper"><nuxt-link class="header__link" :exact=true :to="localePath('/')">{{ $t('nav.wallets') }}</nuxt-link></li>
            <li @click="menuWrapper"> <nuxt-link class="header__link__language" :to="switchLocalePath('ru')">RU</nuxt-link>
             <nuxt-link class="header__link__language" :to="switchLocalePath('en')">EN</nuxt-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <div class="content">
    <Nuxt/>
  </div>
</div>
</template>


<script>
export default {
  methods: {
    menuWrapper() {
      document.getElementById("wrapper__burger").classList.toggle("active")
      document.getElementById("wrapper__menu").classList.toggle("active")

    }
  }
}
</script>

<style>
*,*:before,*:after{
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  outline: none;
}
html,body{
  height: 100%;
  font-family: 'Roboto', sans-serif;
  background-color: #1C1C1C;
  outline: none;

}
.container{
  max-width: 796px;
  margin: 0 auto;
  padding: 0 10px;
}

header{
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;
}
header:before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1C1C1C;
;
  z-index: 2;
}
.header__body{
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  width: 100%;

}

.header__logo{
  flex: 0 0 115px;
  overflow: hidden;
  position: relative;
  z-index: 3;
}

.logo{
  font-weight: 300;
  font-size: 20px;
  max-width: 100%;
  color: transparent;    
	  -webkit-background-clip: text;
	  background-clip: text;
	  background-image: linear-gradient(90deg, #F53491 0.99%, #4F86B9 98.7%);
}
.logo__strong{
  font-weight: 700;
}

.header__logo a{
  text-decoration: none;
  color: #fff;
}



.header__burger{
  display: none;
}



.header__menu{
  display: flex;
}
.header__list{
  display: flex;
  position: relative;
  align-items: flex-start;
  z-index: 2;
}

.header__list li{
  list-style: none;
  margin: 0 0 0 20px;
}
.header__list li a {
  text-decoration: none;
}

.header__link{
  color: #fff;
  font-size: 18px;
}

.header__link__language{
  color: #fff;
  font-size: 18px;
  font-weight: 300;
}
.header__link__language:first-child{
  margin-left: 20px;
  margin-right: 10px;

}

.content{
  padding: 90px 0 0 0 ;
}
.content__text{
  font-size: 16px;
  line-height: 20px;
}
.content__text p {
  margin: 0 0 20px 0;
}

@media (max-width: 767px){
  body.lock{
    overflow: hidden;
  }
  .container{
    padding: 0px 10px;
  }
  .header__body{
    display: flex;
    height: 50px;
    width: 100%;
  }
  .header__logo{
    flex: 0 0 115px
  }
  .header__burger{
    display: block;
    position: relative;
    width: 25px;
    height: 23px;
    z-index: 3;
  }

  .header__burger.active span{
    transform: scale(0);
  }

  .header__burger.active:before{
    transform: rotate(45deg);
    top: 9px;
  }
    .header__burger.active:after{
    transform: rotate(-45deg);
    bottom: 9px;
  }
  .header__burger:before,
  .header__burger:after{
    content: '';
    background-color: #fff;
    position: absolute;
    width: 100%;
    height: 5px;
    left: 0;
    transition: all 0.3s ease 0s;
  }
  .header__burger span{
    position: absolute;
    background-color: #fff;
    left: 0;
    width: 100%;
    height: 5px;
    top: 8.7px;
    transition: all 0.3s ease 0s;
  }
  .header__burger:before{
    top: 0;
  }
  .header__burger:after{
    bottom: 0;
  }
  .header__menu{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:#1C1C1C;
    padding: 70px 0 20px 10px;
    transition: all 0.3s ease 0s;
  }
  .header__menu.active{
    top: 0;
  }
  .header__list{
    display: block;
    text-align: center;
  }
  .header__list li {
    margin: 0 0 20px 0;
    margin-top: 33px;
  }
  .header__list li a{
    font-size: 30px;
    font-weight: 300;
    
  }
  .header__link__language:first-child{
    margin: 0;
  }
  .header__link__language{
    margin: 5px;
    margin-top: 10px;
  }
  .header__list li:last-child{
    margin-top: 40px;
  }
}

</style>
