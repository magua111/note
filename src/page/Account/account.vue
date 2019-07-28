<template>
  <div class="account">
    <div class="tittle">
      <el-tabs
        v-model="activeName"
        @tab-click="forgertPassWordOrLogin"
      >
        <el-tab-pane
          label="YOUR ACCOUNT"
          name="first"
        >
        </el-tab-pane>
      </el-tabs>
    </div>
    <ul class='myType'>
      <li>
        <div class="icon">
          <!-- <img src="../../../static/images/order@2x.png" alt=""> -->
        </div>

        <router-link :to="{ path: '/orders'} " >
        <!-- <router-link :to="{ path: '/account' }"> -->
           <div class="message">
              <div class="type">YOUR ORDERS </div>
              <div class="des">Track,reture,or buy things again</div>
            </div>
        </router-link>



      </li>
      <li>
        <div class="icon">
          <!-- <img src="../../../static/images/order@2x.png" alt=""> -->
        </div>
        <div class="message">
          <div class="type">LOGIN&SECURITY </div>
          <div class="des">Edit login ,name,and moblie number</div>
        </div>
      </li>
      <li>
        <div class="icon">
          <!-- <img src="../../../static/images/order@2x.png" alt=""> -->
        </div>
        <div class="message">
          <div class="type">YOUR ADDRESS </div>
          <div class="des">Edit sddresses for orders and gifts</div>
        </div>
      </li>
      <li>
        <div class="icon">
        </div>
        <div class="message">
          <div class="type">PAYMENT OPTIONS </div>
          <div class="des">Edit or add payment methods</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    forgertPassWordOrLogin(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
</style>

<style lang="scss" scoped >
.account {
  width: 960px;
  margin: 0 auto;
  padding: 50px 100px;
  margin-top: 124px;

  .myType {
    li {
      width: 370px;
      height: 100px;
      // background-color:red;
      margin-top: 30px;
      padding-left: 50px;
      padding-top: 30px;
      border: 1px solid rgba(229, 229, 229, 1);
      .icon {
        float: left;
        width: 38px;
        height: 39px;
        // background-color: red;
        background: url(../../../static/images/order@2x.png);
        background-size: cover;
        margin-right: 32px;
      }

      .message {
        float: left;
        padding-left: 30px;
        border-left: 1px solid rgba(160, 160, 160, 1);
        .type {
          font-size: 15px;
          font-family: Arial-BoldMT;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
        }
        .des {
          padding-top: 5px;
          font-size: 12px;
          font-family: ArialMT;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
        }
      }
    }
    li:nth-child(odd) {
      float: left;
    }

    li:nth-child(even) {
      float: right;
    }

    li:nth-child(2) .icon {
      width: 34px;
      height: 32px;
       margin-right: 36px;
      background-image: url(../../../static/images/Fill@2x.png);
      // background-color:red;
    }
    li:nth-child(3) .icon {
       width: 34px;
      height: 34px;
       margin-right: 36px;
      background-image: url(../../../static/images/tubiao-houtai--2@2x.png);
    }
    li:nth-child(4) .icon {
      width: 35px;
      height: 42px;
       margin-right: 35px;
      background-image: url(../../../static/images/fukuan_xianxing@2x.png);
    }
  }
  .tittle {
  }
  .myType {
  }
}
</style>
