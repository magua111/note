<template>
  <div class="home">
      <navList></navList>
      <router-link :to="{ path: '/search' }">
        <div class="banner">
          <div class='picTittle'>
            <div class="picDetail">
              <h1>Do you want to write the future to your</h1>
              <h1> heart's content？</h1>
            </div>
            <div class="picBut">
              Shop Desktop Glass
            </div>
          </div>
          <img src="../../../static/images/bg@2x.png" alt="">
        </div>
      </router-link>

      <div class="help">
        <div class="container bgc818 p30">
          <div class="heedHelp">
            <img src="../../../static/images/xinfeng@2x.png" alt="">
            <span>Need Help? Contcat us now!</span>
          </div>
          <div class="join">
            <span>NEWSELETTER SIGNUP</span>
            <el-input placeholder="enter your email address..." v-model="input2">
              <template slot="append">JOIN</template>
            </el-input>
          </div>
        </div>
      </div>

      <div class="list">
        <div class="container">
          <div class="porduct" v-for='item in 6'>
            <div class="top">
              <div class="porductName">DRY-REASE BOARDS</div>
              <div class="but">SHOP NOW</div>
            </div>
            <div class="pic">
              <img src="../../../static/images/tu1@2x.png" alt="">
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
  import { productHome } from '/api/index.js'
  import YShelf from '/components/shelf'
  import product from '/components/product'
  import navList from '/components/navList'
  import mallGoods from '/components/mallGoods'
  import { setStore, getStore } from '/utils/storage.js'
  export default {
    data () {
      return {
        error: false,
        banner: [],
        input2:'',
        mark: 0,
        bgOpt: {
          px: 0,
          py: 0,
          w: 0,
          h: 0
        },
        home: [],
        loading: false,
        notify: '1',
        dialogVisible: false,
        timer: ''
      }
    },
    methods: {

    },
    mounted () {

    },
    created () {
    },
    components: {
      YShelf,
      product,
      mallGoods,
      navList
    }
  }
</script>

<style  lang="scss">
  .help {


  .el-input__inner{
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    background-color: #f6f9fe;
    padding-left: 20px;
  }
  .el-input-group__append, .el-input-group__prepend {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    cursor: pointer;
    font-weight: Regular;
    background-color: #336598;
    border-color:  #336598;
    width: 80px;
    text-align:center;
     font-size: 15px;


    font-family:ArialMT;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  .el-input-group{
    width: 285px;
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


<style lang="scss" rel="stylesheet/scss" scoped>
  .home {
    display: flex;
    flex-direction: column;
    padding-bottom: 5px;
    background-color: #fff;
  }
  .banner{

    background-color: #fff;
    position: relative;
    .picTittle{

      position: absolute;
      top: 45%;
      transform: translateY(-50%);
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      h1{
        text-align: center;

        font-size:30px;
        font-family:Arial-BoldMT;
        font-weight:bold;
        color:rgba(255,255,255,1);
        text-shadow:0px 7px 8px rgba(51,51,0,1);
        padding-bottom: 10px;

      }
      .picBut{
        margin-top: 30px;
        margin-bottom: 50px;
        display: inline-block;
        width:191px;
        height:44px;
        line-height: 44px;
        background:rgba(0,0,0,0.65);
        border:1px solid rgba(0,0,0,1);
        box-shadow:0px 7px 8px 0px rgba(0, 0, 0, 0.21);
        border-radius:22px;
        // width:136px;
        font-size:15px;
        font-family:ArialMT;
        font-weight:400;
        color:rgba(255,255,255,1);

      }
    }
    img{
      margin: 0 auto;
      width: 960px;
      height: 578px;
      // background-color: pink;
    }
  }

   .help{
    height: 70px;
    line-height: 70px;
    background-color: #fff;
    font-size: 18px;
    font-weight:Regular;
    font-weight: 700;
    .p30{
      padding: 0 30px;
    }
    .bgc818{
      background-color: #818181;
    }
    .heedHelp{
      // color: #ffffff;
      float: left;

      font-size:18px;
      font-family:ArialMT;
      font-weight:400;
      color:rgba(255,255,255,1);

      img{
        float: left;
        width: 24px;
        margin-top: 24px;
        margin-right: 18px;
      }
    }
    .join{
      font-size:15px;
      font-family:ArialMT;
      // font-weight:bold;
      color:rgba(255,255,255,1);
      float: right;
      span{
        font-size:15px;
        font-family:ArialMT;
        font-weight:400;
        color:rgba(255,255,255,1);
        padding-right: 20px;
      }
    }
  }
  .list{
    background-color: #fff;
    // :nth-child(odd) {
    //   border-right: 1px solid #fff;
    // }
    // :nth-child(even) {
    //   border-left: 1px solid #fff;
    // }
    .porduct{
      width: 50%;
      float: left;
      .top{
        height: 90px;
        line-height: 90px;
        padding: 0 20px;
        background-color: #fff;
        .porductName{
          display: inline;

          font-size:20px;
          font-family:Arial-BoldMT;
          font-weight:bold;
          color:rgba(0,0,0,1);
          // tex
        }
        .but{
          display: inline-block;
          height: 40px;
          line-height: 38px;
          width:110px;
          text-align:center;
          float: right;
          margin-top: 30px;
          box-sizing: border-box;
          cursor: pointer;;



          font-size:15px;
          font-family:Arial-BoldMT;
          font-weight:bold;
          color:rgba(51,51,51,1);

          background:rgba(0,0,0,0.1);
          border:1px solid rgba(0,0,0,1);
          border-radius:20px;
        }
      }
      .pic{
        width: 100%;
        // background-color: red;
        img{
          width: 480px;
          // height: 490px;
          // margin: 0 auto;
        }
      }
    }
  }



  .no-info {
    padding: 100px 0;
    text-align: center;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    .no-data{
      align-self: center;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .page {
    position: absolute;
    width: 100%;
    top: 470px;
    z-index: 30;
    .dots {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .dot-active {
        display: inline-block;
        width: 15px;
        height: 15px;
        background-color: whitesmoke;
        border-radius: 8px;
        margin-right: 10px;
        cursor: pointer;
      }
      .dot {
        opacity: 0.2;
      }
    }
  }

  .activity-panel {
    width: 1220px;
    margin: 0 auto;
    .box {
      overflow: hidden;
      position: relative;
      z-index: 0;
      margin-top: 25px;
      box-sizing: border-box;
      border: 1px solid rgba(0,0,0,.14);
      border-radius: 8px;
      background: #fff;
      box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
    }
    .content {
      float: left;
      position: relative;
      box-sizing: border-box;
      width: 25%;
      height: 200px;
      text-align: center;
    }
    .content ::before{
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      box-sizing: border-box;
      border-left: 1px solid #f2f2f2;
      border-left: 1px solid rgba(0,0,0,.1);
      width: 100%;
      height: 100%;
      content: "";
      pointer-events: none;
    }
    .i {
      width: 305px;
      height: 200px;
    }
    .cover-link {
      cursor: pointer;
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 4;
      background: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEHAAEALAAAAAABAAEAAAICTAEAOw==) repeat;
    }
    a {
      color: #5079d9;
      cursor: pointer;
      transition: all .15s ease-out;
      text-decoration: none;
    }
    a:hover {
      box-shadow: inset 0 0 38px rgba(0,0,0,.08);
      transition: all .15s ease;
    }
  }




  .bg {
    position: relative;
    width: 1220px;
    height: 500px;
    margin: 20px auto;
    background-size: 100% 100%;
    border-radius: 10px;
    transform-style: preserve-3d;
    transform-origin: 50% 50%;
    transform: rotateY(0deg) rotateX(0deg);
    & div{
      position: relative;
      height: 100%;
      width: 100%;
    }
  }

  .img1 {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    border-radius: 10px;
  }

  .img2 {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 5px;
    left: 0;
    background-size: 95% 100%;
    border-radius: 10px;
  }

  .img3 {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    border-radius: 10px;
  }

  .a {
    z-index: 20;
    transform: translateZ(40px);
  }

  .b {
    z-index: 20;
    transform: translateZ(30px);
  }

  .c {
    transform: translateZ(0px);
  }

  .sk_item {
    width: 170px;
    height: 225px;
    padding: 0 14px 0 15px;
    > div {
      width: 100%;
    }
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all .3s;
      &:hover {
        transform: translateY(-5px);
      }
    }

    .sk_item_name {
      color: #999;
      display: block;
      max-width: 100%;
      _width: 100%;
      overflow: hidden;
      font-size: 12px;
      text-align: left;
      height: 32px;
      line-height: 16px;
      word-wrap: break-word;
      word-break: break-all;
    }
    .sk_item_price {
      padding: 3px 0;
      height: 25px;
    }
    .price_new {
      font-size: 18px;
      font-weight: 700;
      margin-right: 8px;
      color: #f10214;
    }
    .price_origin {
      color: #999;
      font-size: 12px;
    }
  }

  .box {
    overflow: hidden;
    position: relative;
    z-index: 0;
    margin-top: 29px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, .14);
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, .1);

  }



  .mt30 {
    margin-top: 30px;
  }

  .hot {
    display: flex;
    > div {
      flex: 1;
      width: 25%;
    }
  }

  .floors {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .imgbanner {
      width: 50%;
      height: 430px;
      .cover-link {
        cursor: pointer;
        display: block;
        position: absolute;
        top: 60px;
        left: 0;
        width: 50%;
        height: 430px;
        z-index: 4;
        background: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEHAAEALAAAAAABAAEAAAICTAEAOw==) repeat;
      }
      .cover-link:hover {
        box-shadow: inset 0 0 38px rgba(0,0,0,.08);
        transition: all .15s ease;
      }
    }
    img {
      display: block;
      width: 100%;
      // height: 100%;
    }
  }

</style>
