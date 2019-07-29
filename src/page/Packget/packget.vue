<template>
  <div class="packget">
    <div class='miaobaoxie'>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">YOUR ACCOUNT</el-breadcrumb-item>
        <el-breadcrumb-item><span class='color333'>TRACK YOUR PACKGET</span></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class='searchordersDetail clearfix'>
      <div class='headline'>
        <p class='yourTittle'>TRACK YOUR PACKGET</p>
      </div>
    </div>

    <div class="pruDetail clearfix">
      <div class="pic"></div>
      <div class="pruState">
        <p>2019-5-12 Has been delivered </p>
        <p><span>Shipment status：</span>punctuality</p>
      </div>
    </div>
    <div class="pruLine clearfix">
      <div :class='["activeLine",
        stepClass]'></div>
      <div :class='["stepLogo", carClass]'></div>
      <div :class="['carLogoRod',carLogoRod3Class]"></div>
    </div>
    <div class='carLine'>
        <div class="lineStep">
          <div class="orderStep ">
            <p>Order successfully</p>
            <p>On November 29th</p>
          </div>
        </div>
        <div class="lineStep">
          <div class="orderStep">
            <p>Has been shipped</p>
            <p>On November 29th </p>
          </div>
        </div>
        <div class="lineStep">
          <div class="orderStep textRight">
            <p>expect 2019-2-34 </p>
            <p>delivery </p>
          </div>
        </div>
      </div>

    <div class="shipping clearfix">
      <div class="shoppingUpdate">
        <p>GET ORDER UPDATES VIA EMAIL</p>
        <p>Email to：</p>
        <p>**********</p>
        <div class="but">
          <div class="numberBut">Edit the number</div>
          <div class="unsubscribe">Unsubscribe</div>
        </div>
      </div>
      <div class="shippingStep">
        <p class='details'>Shipping details</p>
       <div class="block">
           <el-timeline>
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/12 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/3" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/3 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/2 20:46</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
        </div>




      </div>

    </div>
  </div>
</template>

<script>
import navList from "/components/navList";
import YButton from "/components/YButton";
import { mapMutations, mapState } from "vuex";
import { getCartList, cartDel, getQuickSearch } from "/api/goods";
// import { loginOut, navList } from '/api/index'
import { setStore, getStore, removeStore } from "/utils/storage";
// import store from '../store/'
// import "element-ui/lib/theme-default/index.css";
export default {
  data() {
    return {
      step: "2",
       reverse: true,
       activities: [{
          content: '支持使用图标wwww',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }, {
          content: '支持自定义颜色',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        }, {
          content: '支持自定义尺寸',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46'
        }]
    };
  },
  computed: {
    stepClass: function() {
      if (this.step == 1) {
        return "activeLine1";
      } else if (this.step == 2) {
        return "activeLine2";
      } else {
        return "activeLine3";
      }
    },
    carClass: function() {
      if (this.step == 1) {
        return "stepLogo";
      } else if (this.step == 2) {
        return "stepLogo2";
      } else {
        return "stepLogo3";
      }
    },
    carLogoRod3Class: function() {
      if (this.step == 1) {
        return "carLogoRod";
      } else if (this.step == 2) {
        return "carLogoRod2";
      } else {
        return "carLogoRod3";
      }
    },






  },
  methods: {}
};
</script>


<style lang="scss" scoped>
.packget {

  .shipping{
    padding-top: 40px;
    margin-bottom: 30px;
    .shippingStep{
      .details{
        font-size:15px;
        font-family:Arial-BoldMT;
        font-weight:bold;
        color:rgba(51,51,51,1);
      }
    }
    .unsubscribe{
      background:rgba(170,170,170,1);
      border-radius:16px;
      font-size:12px;
      font-family:ArialMT;
      font-weight:400;
      width:118px;
      height:33px;
      line-height: 33px;
      display: inline-block;
      color:rgba(255,255,255,1);
      text-align: center;
    }
    .numberBut{
      margin-bottom: 10px;
      text-align: center;
      display: inline-block;
      background:rgba(13,13,13,1);
      border:1px solid rgba(13,13,13,1);
      border-radius:16px;
      font-size:12px;
      font-family:ArialMT;
      font-weight:400;
      color:rgba(255,255,255,1);
      width:118px;
      height:33px;
      line-height: 33px;
    }
    .shoppingUpdate{
      padding: 0 60px;
      width: 400px;
      text-align: left;
      border-left:1px solid rgba(210,210,210,1);
      float: right;
      font-size:15px;
      font-family:Arial-BoldMT;
      font-weight:bold;
      color:rgba(51,51,51,1);
      p:nth-child(2){
        font-size:15px;
        font-family:ArialMT;
        font-weight:400;
        padding-top: 20px;
        padding-bottom: 10px;
        color:rgba(51,51,51,1);
      }
      p:nth-child(3){
        font-size:15px;
        font-family:ArialMT;
        font-weight:400;
        color:rgba(51,51,51,1);
        margin-bottom: 20px;
      }
    }
  }



  .textRight {
    text-align: right;
    p{
      font-size:12px!important;
      font-family:Arial-BoldMT!important;
      font-weight:bold;
      color:rgba(153,153,153,1)!important;
    }
  }
  .carLine{
      display: flex;
      padding: 0 20px;
    }

  .orderStep{
      p:nth-child(1) {
        font-size:12px;
        font-family:Arial-BoldMT;
        font-weight:bold;
        color:rgba(51,51,51,1);
      }
      p:nth-child(2){
        font-size:9px;
        font-family:Arial-BoldMT;
        font-weight:bold;
        padding-top: 5px;
        color:rgba(51,51,51,1);
      }
    }
     .lineStep {
      flex:1;
      display: inline-block;
      // width: 32%;
      padding-top: 20px;
    }
  .pruLine {
    // margin-top: 20px;
    height: 10px;
    background: rgba(238, 238, 238, 1);
    margin: 20px;
    position: relative;
    padding-top: 10px;
    margin-top: 40px;




    .carLogoRod{
      position: absolute;
      top: -8px;
      left: 150px;
      border-top: 4px solid rgba(0, 0, 0, 0);
      border-right: 4px solid rgba(0, 0, 0, 0);
      border-bottom: 4px solid #336699;
      border-left: 4px solid rgba(0, 0, 0, 0);
      // position: relative;
    }
    .carLogoRod:after{
      position: absolute;
      content: '';
      width: 20px;
      height: 15px;
      top: -20px;
      left: -10px;
      background-color: red;
    }

    .carLogoRod2{
      left: 550px;
    }


    .carLogoRod3{
      display: none;
    }



    .stepLogo {
      position: absolute;
      top: 10px;
      left: 50px;
      border-bottom: 8px solid rgba(0, 0, 0, 0);
      border-right: 8px solid rgba(0, 0, 0, 0);
      border-top: 8px solid #336699;
      border-left: 8px solid rgba(0, 0, 0, 0);
    }
    .stepLogo2 {
      left: 345px;
    }

    .stepLogo3 {
      display: none;
      // left: 0;
      // right: 0;
    }

    .pr30 {
      // padding-right: 30px;
    }
    .activeLine {
      position: absolute;
      height: 10px;
      // width: 100px;
      top: 0;
      left: 0;
      background: rgba(51, 102, 153, 1);
    }
    .activeLine1 {
      width: 200px;
    }
    .activeLine2 {
      width: 645px;
    }
    .activeLine3 {
      width: 100%;
    }
  }
  .pruDetail {
    padding-left: 35px;
    .pruState {
      // display: inline-block;
      vertical-align: top;
      margin-left: 125px;
      bottom: red;
      padding-left: 20px;
      padding-top: 5px;
      position: relative;
      // padding-left: 45px;
      p {
        // height: 30px;
        // line-height: 30px;
        margin-top: 10px;
      }
      p:nth-child(1) {
        // font-weight:bold;
        color: rgba(51, 51, 51, 1);
        border-left: 1px solid rgba(153, 153, 153, 1);
        margin-left: 25px;
        padding-left: 10px;
        position: relative;

        font-size: 15px;
        font-family: Arial-BoldMT;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
      }
      p:nth-child(2) {
        font-size: 15px;
        font-family: ArialMT;
        font-weight: 400;
        color: #48576a;
        span {
          color: #333333;
        }
      }
    }

    p:nth-child(1):after {
      content: "";
      width: 21px;
      height: 19px;
      // background-color:red;
      background: url(../../../static/images/yunshu@2x.png);
      background-size: cover;
      position: absolute;
      left: -26px;
      top: 0px;
    }
    .pic {
      float: left;
      background-color: pink;
      width: 125px;
      height: 80px;
      display: inline-block;
    }
  }
  // height: 5px;
  padding-top: 124px;
  // height: 500px;
}
</style>
