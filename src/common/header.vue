<template>
  <div class="header-box">
    <div>
      <header class="w">
        <div class="w-box">
          <div class="nav-logo">
            <img src="../../static/images/logo.png" alt="">
          </div>
          <div class="right-box">
            <div class="nav-list">
              <!-- <el-autocomplete
                placeholder="SEARCH"
                icon="search"
                v-model="input"
                :fetch-suggestions="querySearchAsync"
                @select="handleSelect"
                :on-icon-click="handleIconClick"
                @keydown.enter.native="handleIconClick">
              </el-autocomplete> -->


              <el-input placeholder="SEARCH" v-model="input">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>





            </div>
            <div class="nav-aside" ref="aside" :class="{fixed:st}">
              <router-link :to="{ path: '/register' }">
                 <div class="operation user mr15">
                    <span class='collore1e'>LOGIN</span>
                 </div>
              </router-link>
             <router-link :to="{ path: '/account' }">
                <div class="operation account mr15">
                  <span class='collore1e'>My Account</span>
                </div>
              </router-link>
               <div class="operation shop">
                <span class='collore1e'>shopping cart</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
    <navList></navList>
  </div>
</template>
<script>
  import navList from '/components/navList'
  import YButton from '/components/YButton'
  import { mapMutations, mapState } from 'vuex'
  import { getCartList, cartDel, getQuickSearch } from '/api/goods'
  // import { loginOut, navList } from '/api/index'
  import { setStore, getStore, removeStore } from '/utils/storage'
  // import store from '../store/'
  // import 'element-ui/lib/theme-default/index.css'
  export default{
    data () {
      return {
        user: {},
        // 查询数据库的商品
        st: false,
        input2:'',
        // 头部购物车显示
        cartShow: false,
        positionL: 0,
        positionT: 0,
        timerCartShow: null, // 定时隐藏购物车
        input: '',
        choosePage: -1,
        searchResults: [],
        timeout: null,
        token: '',
        navList: []
      }
    },
    computed: {
      ...mapState([
        'cartList', 'login', 'receiveInCart', 'showCart', 'userInfo'
      ]),
      // 计算价格
      totalPrice () {
        var totalPrice = 0
        this.cartList && this.cartList.forEach(item => {
          totalPrice += (item.productNum * item.salePrice)
        })
        return totalPrice
      },
      // 计算数量
      totalNum () {
        var totalNum = 0
        this.cartList && this.cartList.forEach(item => {
          totalNum += (item.productNum)
        })
        return totalNum
      }
    },
    methods: {
      ...mapMutations(['ADD_CART', 'INIT_BUYCART', 'ADD_ANIMATION', 'SHOW_CART', 'REDUCE_CART', 'RECORD_USERINFO', 'EDIT_CART']),
      handleIconClick (ev) {
        if (this.$route.path === '/search') {
          this.$router.push({
            path: '/refreshsearch',
            query: {
              key: this.input
            }
          })
        } else {
          this.$router.push({
            path: '/search',
            query: {
              key: this.input
            }
          })
        }
      },
      showError (m) {
        this.$message.error({
          message: m
        })
      },


      // 搜索框提示
      loadAll () {
        let params = {
          params: {
            key: this.input
          }
        }
        getQuickSearch(params).then(res => {
          if (res === null || res === '') {
            return
          }
          if (res.error) {
            this.showError(res.error.reason)
            return
          }
          var array = []
          var maxSize = 5
          if (res.hits.hits.length <= 5) {
            maxSize = res.hits.hits.length
          }
          for (var i = 0; i < maxSize; i++) {
            var obj = {}
            obj.value = res.hits.hits[i]._source.productName
            array.push(obj)
          }
          if (array.length !== 0) {
            this.searchResults = array
          } else {
            this.searchResults = []
          }
        })
      },
      querySearchAsync (queryString, cb) {
        if (this.input === undefined) {
          cb([])
          return
        }
        this.input = this.input.trim()
        if (this.input === '') {
          cb([])
          return
        } else {
          this.loadAll()
          setTimeout(() => {
            cb(this.searchResults)
          }, 300)
        }
      },
      handleSelect (item) {
        this.input = item.value
      },
      // 购物车显示
      cartShowState (state) {
        this.SHOW_CART({showCart: state})
      },
      // 登陆时获取一次购物车商品
      _getCartList () {
        getCartList({userId: getStore('userId')}).then(res => {
          if (res.success === true) {
            setStore('buyCart', res.result)
          }
          // 重新初始化一次本地数据
        }).then(this.INIT_BUYCART)
      },
      // 删除商品
      delGoods (productId) {
        if (this.login) { // 登陆了
          cartDel({userId: getStore('userId'), productId}).then(res => {
            this.EDIT_CART({productId})
          })
        } else {
          this.EDIT_CART({productId})
        }
      },
      toCart () {
        this.$router.push({path: '/cart'})
      },
      // 控制顶部
      navFixed () {
        if (this.$route.path === '/goods' || this.$route.path === '/home' || this.$route.path === '/goodsDetails' || this.$route.path === '/thanks') {
          var st = document.documentElement.scrollTop || document.body.scrollTop
          st >= 100 ? this.st = true : this.st = false
          // 计算小圆当前位置
          let num = document.querySelector('.num')
          this.positionL = num.getBoundingClientRect().left
          this.positionT = num.getBoundingClientRect().top
          this.ADD_ANIMATION({cartPositionL: this.positionL, cartPositionT: this.positionT})
        } else {
          return
        }
      },
      // 退出登陆
      _loginOut () {
        let params = {
          params: {
            token: this.token
          }
        }
        loginOut(params).then(res => {
          removeStore('buyCart')
          window.location.href = '/'
        })
      },
      openProduct (productId) {
        window.open('//' + window.location.host + '/#/goodsDetails?productId=' + productId)
      },
      _getNavList () {
        navList().then(res => {
          this.navList = res.result
        })
      }
    },
    mounted () {

    },
    components: {
      YButton,
      navList
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../assets/style/theme";
  @import "../assets/style/mixin";

  .move_in_cart {
    animation: mymove .5s ease-in-out;
  }

  @keyframes mymove {
    0% {
      transform: scale(1)
    }
    25% {
      transform: scale(.8)
    }
    50% {
      transform: scale(1.2)
    }
    75% {
      transform: scale(.9)
    }
    100% {
      transform: scale(1)
    }
  }

  @-moz-keyframes mymove {
    0% {
      transform: scale(1)
    }
    25% {
      transform: scale(.8)
    }
    50% {
      transform: scale(1.2)
    }
    75% {
      transform: scale(.9)
    }
    100% {
      transform: scale(1)
    }
  }

  @-webkit-keyframes mymove {
    0% {
      transform: scale(1)
    }
    25% {
      transform: scale(.8)
    }
    50% {
      transform: scale(1.2)
    }
    75% {
      transform: scale(.9)
    }
    100% {
      transform: scale(1)
    }
  }

  @-o-keyframes mymove {
    0% {
      transform: scale(1)
    }
    25% {
      transform: scale(.8)
    }
    50% {
      transform: scale(1.2)
    }
    75% {
      transform: scale(.9)
    }
    100% {
      transform: scale(1)
    }
  }

  .header-box {
    background: #383f49;
    // background-image: -webkit-linear-gradient(#000, #121212);
    // background-image: linear-gradient(#000, #121212);
    // width: 100%;
    width: 960px;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
  }
  .nav{
    height: 62px;
    line-height: 62px;
    background-color: #336598;
    width: 100%;
    .container{
      ul{
        li{
          float: left;
          width: 20%;
          font-weight: 400;
          text-align: center;
        }
      }
    }
  }
  .banner{
    height: 570px;
    background-color: #fff;
    .img{
      background-color: #e9e9e9;
    }
  }
  .help{
    height: 85px;
    line-height: 85px;
    background-color: #fff;
    font-size: 16px;
    font-weight: 700;
    .p30{
      padding: 0 30px;
    }
    .bgc818{
      background-color: #818181;
    }
    .heedHelp{
      color: #ffffff;
      float: left;
    }
    .join{
      color: #ffffff;
      float: right;
      span{
        padding-right: 20px;
      }

    }
  }

  header {
    height: 62px;
    z-index: 30;
    // position: fixed;
    top: 0;
    right: 0;
  }
  .collore1e{
    color: #e1e2dc;
    font-size: 9px;
    display: inline-block;
    height: 30px;
    cursor: pointer;
    line-height: 30px;
  }
  .w-box {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    height: 100%;
    // position: relative;
    .nav-logo{
      margin-left: 16px;
      margin-right: 119px;
      img{
        width: 146px;
        height: 35px;
        display: block;
      }
    }

    .nav-list {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 20px;
       font-size:8px;
        font-family:ArialMT;
        font-weight:400;
        color:rgba(153,153,153,1);
      .el-autocomplete{
        width: 305px;
      }
      a {
        width: 110px;
        color: #c8c8c8;
        display: block;
        font-size: 14px;
        padding: 0 25px;
        font-size:8px;
        font-family:ArialMT;
        font-weight:400;
        color:rgba(153,153,153,1);


        // &:hover {
        //   color: #fff;
        // }
      }
      a:nth-child(2){
        // width: 5vw;
        margin-left: -10px;
      }
      // a:nth-child(3){
      //   width: 5vw;
      // }
    }
    .nav-aside {
      position: relative;


    }

    .right-box {
      display: flex;
      // margin-left: 150px;
      justify-content: space-between;
      width: 100%;
      // padding-left:150px;
      padding-right: 16px;
      // float: left;
    }
    .nav-aside {
      display: flex;
      align-items: center;
    }
    // 用户
    .operation {
      padding-left: 25px;
      font-size: 9px;
      line-height: 30px;
      height: 30px;
      color: #CCCCCC;
      text-align: right;
      position: relative;

      font-size:9px;
      font-family:Arial-BoldMT;
      font-weight:bold;
      color:rgba(204,204,204,1);
    }
    .user{
        padding-left: 25px;
        :after{
        content: '';
          width: 15px;
          height: 18px;
          // background: url(     /static/images/yonghu@2x.png);
          background:url(../../static/images/yonghu@2x.png);
          background-size:cover;
          position: absolute;
          top: 50%;
          left: 1px;
          font-weight: Bold;
          transform: translateY(-50%);
        }
    }

    .account{
      padding-left: 25px;
        :after{
        content: '';
          width: 15px;
          height: 18px;
          background: url(../../static/images/digndan@2x.png);
          background-size:cover;
          position: absolute;
          top: 50%;
          color: #CCCCCC;
          font-weight: Bold;
          left: 1px;
          transform: translateY(-50%);
        }
    }
    .shop {
      padding-left: 31px;
        :after{
        content: '';
          width: 21px;
          height: 18px;
          background: url(../../static/images/gouwucheman@2x.png);
          background-size:cover;
          position: absolute;
          top: 50%;
          color: #CCCCCC;
          font-weight: Bold;
          left: 1px;
          transform: translateY(-50%);
        }
    }
  }

  @media (max-height: 780px) {
    .nav-cart-items {
      max-height: 423px !important;
    }
  }

  @media (max-height: 900px) {
    .nav-cart-items {
      max-height: 544px !important;
    }
  }

  @media (max-height: 1080px) {
    .nav-cart-items {
      max-height: 620px !important;
    }
  }

  // 用户信息弹出
  .nav-user-wrapper {
    position: absolute;
    z-index: 30;
    padding-top: 18px;
    opacity: 0;
    visibility: hidden;
    top: -3000px;
    .nav-user-list {
      position: relative;
      padding-top: 20px;
      background: #fff;
      border: 1px solid #d6d6d6;
      border-color: rgba(0, 0, 0, .08);
      border-radius: 8px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, .15);
      z-index: 10;
      &:before {
        position: absolute;
        content: " ";
        background: url(/static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png) no-repeat -49px -43px;
        background-size: 240px 107px;
        @include wh(20px, 8px);
        top: -8px;
        margin-left: -10px;
      }
    }
  }

  .nav-sub {
    position: relative;
    z-index: 20;
    height: 90px;
    background: #f7f7f7;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .04);
    &.fixed {
      position: fixed;
      z-index: 21;
      height: 60px;
      top: 0;
      left: 0;
      right: 0;
      border-bottom: 1px solid #dadada;
      background-image: -webkit-linear-gradient(#fff, #f1f1f1);
      background-image: linear-gradient(#fff, #f1f1f1);
    }
    .nav-sub-wrapper {
      padding: 31px 0;
      height: 90px;
      position: relative;
      &.fixed {
        padding: 0;
        height: 100%;
        display: flex;
        align-items: center;
      }
      &:after {
        content: " ";
        position: absolute;
        top: 89px;
        left: 50%;
        margin-left: -610px;
        width: 1220px;
        background: #000;
        height: 1px;
        display: none;
        opacity: 0;
        -webkit-transition: opacity .3s ease-in;
        transition: opacity .3s ease-in;
      }
    }
    .w {
      display: flex;
      justify-content: space-between;
    }
    .nav-list2 {
      height: 28px;
      line-height: 28px;
      display: flex;
      align-items: center;
      height: 100%;
      li:first-child {
        padding-left: 0;
        a {
          padding-left: 10px;
        }
      }
      li {
        position: relative;
        float: left;
        padding-left: 2px;
        a {
          display: block;
          padding: 0 10px;
          color: #666;
          &.active {
            font-weight: bold;
          }
        }
        a:hover {
          color: #5683EA;
        }
      }
      li:before {
        content: ' ';
        position: absolute;
        left: 0;
        top: 13px;
        width: 2px;
        height: 2px;
        background: #bdbdbd;
      }
    }
  }

  @media (min-width: 1px) {
    .nav-sub .nav-sub-wrapper:after {
      display: block;
    }
  }

  .cart-con {
    /*display: flex;*/
    text-align: center;
    position: relative;
    p {
      padding-top: 185px;
      color: #333333;
      font-size: 16px;
    }
  }

  .cart-con:before {
    position: absolute;
    content: ' ';
    left: 50%;
    transform: translate(-50%, -70%);
    top: 50%;
    width: 76px;
    height: 62px;
    background: url("/static/images/cart-empty-new.png") no-repeat;
    background-size: cover;

  }
</style>


<style lang="scss">



.header-box{
  .nav-list .el-input__inner{
    // text-align:center;
  }
  .el-input-group__append, .el-input-group__prepend{
    border: 1px solid #ccc;
    background-color: #888;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  .nav-list {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    .el-input__inner {
      // border-radius: 15px!important;
      border-color: #c6c6c9;
      height: 30px;
      border: none;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
    }
    .el-button--default{
      color: #fff;
    }

    .el-input__icon{
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      background-color: #737373;
      height: 30px;
      width: 70px;
    }
    .el-icon-search:before{
      font-size: 15px;
    }

  }
}

.help {
  .el-input__inner{
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    background-color: #f6f9fe;
    padding-left: 20px;
  }
  .el-input-group__append, .el-input-group__prepend {
    border-top-right-radius: 15px;
    border-top-right-radius: 15px;
    cursor: pointer;
    color: #fff;
    font-weight: 700;
    background-color: #336598;
    border-color:  #336598;
    width: 80px;
    text-align:center;
  }
  .el-input-group{
    width: 350px;
    // border-radius: 10px;
  }
   .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
}

</style>
