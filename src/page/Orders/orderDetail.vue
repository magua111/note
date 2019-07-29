<template>
  <div class='ordersDetail'>
    <div class='container miaobaoxie'>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">YOUR ACCOUNT</el-breadcrumb-item>
        <el-breadcrumb-item><span class='color333'>CHECK THE ORDER DETAILS</span></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class='searchordersDetail clearfix'>
      <div class='headline'>
        <p class='yourTittle'>CHECK THE ORDER DETAILS</p>
      </div>
    </div>
    <div class='clearfix'>
      <div class="left clearfix">
        <div class="top">order time</div>
        <div class="bottom">2019/07/09 19:24:30</div>
      </div>
      <div class="right clearfix">
        <div class="top">The order number</div>
        <div class="bottom">34327482374327</div>
      </div>
    </div>
    <div class="p15 clearfix">
      <div class="pruDetail clearfix">
        <div class="personMessage clearfix">
          <div class="line"></div>
          <div class="personDetail">
            <div class="address">
              <div class="adressShopping">
                shipping address
              </div>
              <div class="adressDetail">
                Chaoyang District of Beijing 12312313111
              </div>
            </div>

            <p class="adressShopping pt30">Payment options</p>
            <p class='adressDetail'>zhifubao</p>

          </div>

          <div class="summary">
            <div class="adressShopping"> Order summary</div>
            <div class='clearfix'>
              <div class="adressDetail w50">Merchandise subtotal：$100.0</div>
              <div class="adressDetail w50">subtotal：$100.0</div>
              <div class="adressDetail w50">shipping fee：$5.0</div>
              <div class="adressDetail w50">Promotional offers：$-20.0</div>
            </div>
            <div class="allPrice">Total:<span>$85.0</span></div>
          </div>


        </div>

        <div class="chooseYourBut">
          <div class="delivered">2019-5-12 Has been delivered </div>
          <div class="butList">
            <div class="pic"></div>
            <div class="porMessage">
              <div class="name">Quartet Evoque Magnetic Glass Dry-Erase Boards</div>
              <div class="number">number:2</div>
              <div class="pricePru">$100.0</div>
              <div class="again">BUY AGAIN</div>
            </div>
            <div class="butChoose">
              <router-link :to= "{path: '/packget'}">
                <div class="takePage MT0">Track your package</div>
              </router-link>

              <router-link :to= "{path: '/needReturn'}">
                <div class="takePage">Need to return</div>
              </router-link>


              <div class="takePage blue">Writing evaluation</div>
            </div>
          </div>
        </div>



      </div>
    </div>
  </div>
</template>


<script>
</script>
<style lang="scss" scoped>
.p15 {
  padding: 15px 20px;
}
.pt30 {
  padding-top: 30px;
}
.ordersDetail {
  padding-top: 124px;
  width: 960px;
  // background-color: red;
  margin: 0 auto;
  .chooseYourBut{
    .butList{
      .butChoose{
        float: right;
        padding-right: 10px;
        .takePage{
          cursor: pointer;
          width:227px;
          height:33px;
          background:rgba(13,13,13,1);
          border:1px solid rgba(13,13,13,1);
          border-radius:16px;
          line-height: 29px;
          font-size:18px;
          font-family:ArialMT;
          font-weight:400;
          color:rgba(255,255,255,1);
          text-align: center;
          margin-top: 10px;
        }
        .MT0{
          margin-top: 0;
        }
        .blue{
          background-color: #336699;;
        }
      }
      .porMessage{
        display: inline-block;
        vertical-align: top;
        .again{
          width:115px;
          cursor: pointer;
          height:33px;
          line-height: 33px;
          text-align: center;
          background:rgba(51,102,153,1);
          border-radius:16px;
          font-size:15px;
          font-family:ArialMT;
          font-weight:400;
          color:rgba(255,255,255,1);
          margin-top: 10px;
        }
        .pricePru{
          font-size:15px;
          font-family:ArialMT;
          font-weight:400;
          color:rgba(255,51,51,1);

        }
        .number{
          font-size:15px;
          margin: 11px 0;
          font-family:ArialMT;
          font-weight:400;
          color:rgba(51,51,51,1);
        }
        .name{
          font-size:15px;
          font-family:ArialMT;
          font-weight:400;
          color:rgba(51,51,51,1);
        }
      }
      .pic{
        width: 125px;
        height: 80px;
        background: pink;
        display: inline-block;
        margin-right: 25px;
      }
    }
    .delivered{
      height: 60px;
      line-height: 60px;
      font-size:15px;
      font-family:Arial-BoldMT;
      font-weight:bold;
      color:rgba(51,51,51,1);
    }
  }
  .pruDetail {
    border: 1px solid rgba(210, 210, 210, 1);
    // padding: 10px;
    padding: 15px 10px;
    padding-bottom: 30px;
    .personMessage {
      border-bottom:1px solid rgba(210,210,210,1);
      position: relative;
      padding-bottom: 25px;
      .line{
        position: absolute;
        right: 460px;
        top: 10px;
        width:1px;
        height:84px;
        background:rgba(210,210,210,1);
      }
      .adressDetail {
        font-size: 12px;
        font-family: ArialMT;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        padding-top: 5px;
      }
      .adressShopping {
        font-size: 15px;
        font-family: Arial-BoldMT;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
      }
    }
    .personDetail {
      float: left;
      display: inline-block;
    }
    .summary {
      float: right;
      width: 460px;
      padding-left: 40px;
      // border-left: 1px solid rgba(210, 210, 210, 1);
      .allPrice {
        font-size: 15px;
        font-family: Arial-BoldMT;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        padding-top: 25px;
        span {
          font-size: 15px;
          font-family: Arial-BoldMT;
          font-weight: bold;
          color: rgba(255, 51, 51, 1);
          display: inline-block;
          padding-left: 5px;
        }
      }
      .w50 {
        width: 50%;
        float: left;
        padding-top: 5px;
        display: inline-block;
      }
    }
  }



  .left,
  .right {
    padding-bottom: 10px;
    font-size: 12px;
    font-family: Arial-BoldMT;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    padding-left: 20px;
    line-height: 1.5;
    display: inline-block;
    float: left;
    // padding-right: 30px;
    .top,
    .bottom {
      float: left;
      width: 100%;
    }
  }
  .right {
    padding-left: 3px;
  }
}
</style>

<style lang='scss'>
// table样式

#app .ordersDetail .el-tabs__item.is-active {
  font-size: 15px;
  font-family: Arial-BoldMT;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}

#app .ordersDetail .el-tabs__header {
  border-bottom: 1px solid rgba(210, 210, 210, 1);
}

#app .ordersDetail .el-tabs__item {
  font-size: 15px;
  font-family: Arial-BoldMT;
  font-weight: bold;
  color: rgba(153, 153, 153, 1);
}
#app .ordersDetail .el-tabs__active-bar {
  width: 71px;
  height: 1px;
  background: rgba(0, 0, 0, 1);
  max-width: 70px !important;
}

.ordersDetail {
  .nav-list .el-input__inner {
    // text-align:center;
  }

  .nav-list {
    display: flex;
    width: 310px;
    height: 25px;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    .el-autocomplete {
      width: 100%;
    }
    .el-input__inner {
      border-radius: 15px !important;
      border-color: #c6c6c9;
      height: 25px;
      font-size: 8px;
      font-family: ArialMT;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
    }
    .el-input__icon {
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      background-color: #737373;
      height: 25px;
      width: 70px;
    }
    .el-icon-search:before {
      font-size: 15px;
    }
  }
}
</style>
