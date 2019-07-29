<template>
  <div class="footer">
    <div>
      <div class="top clearfix">
        <div class="pic">
          <img
            src="../../static/images/logo2@2x.png"
            alt=""
          >
        </div>
        <div class="table">
          <table>
            　　　　　　　<tr>
              　　　　　　　　　<th>Contact us</th>
              　　　　　　　　　<th>My Account</th>　
              　　　　　　　　　<th>Manual and instruction list</th>　
              　　　　　　　</tr>
            　　　　　　　<tr>
              　　　　　　　　　<td>Shipping and Handling</td>
              　　　　　　　　　<td>Shopping Cart</td>
              　　　　　　　</tr>
            <tr>
              　　　　　　　　　<td>Account Login list</td>
              　　　　　　　　　<td>My Order Status</td>
              　　　　　　　</tr>
            <tr>
              　　　　　　　　　<td>Account Login list</td>
              　　　　　　　</tr>
            <tr>
              　　　　　　　　　<td>Account Login list</td>
              　　　　　　　</tr>
            　　　　　　
          </table>
        </div>
        <div class="search">
          <div class="tittle">Sign up to hear about savings and tips</div>
          <div class='mt20 mb20'>
            <el-input
              placeholder="Email address"
              v-model="input2"
            >
              <template slot="append">JOIN</template>
            </el-input>
          </div>
          <div class='logo'>
            <ul>
              <li>
                <img
                  src="../../static/images/bird@2x.png"
                  alt=""
                >
              </li>
              <li>
                <img
                  src="../../static/images/lianshu@2x.png"
                  alt=""
                >
              </li>
              <li>
                <img
                  src="../../static/images/shipin@2x.png"
                  alt=""
                >
              </li>
              <li>
                <img
                  src="../../static/images/instagram@2x.png"
                  alt=""
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p>© 2015-2018 innovant.</br> All rights RESERVED. INNIVAN PLANNER AND THE PANDA LOGO ARE TARDEMARKS OR REGISTERED TRADEMARKS OF INNIVAN PLAN-</br>NER.</p>
      </div>
    </div>
  </div>
</template>
<script>
import YButton from "/components/YButton";
export default {
  data() {
    return {
      input2: ""
    };
  }
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.footer {
  background-color: #313131;
  // height: 275px;
  width: 960px;
  margin: 0 auto;
  padding: 0 30px;
  padding-top: 40px;
  padding-bottom: 20px;
  // height: 220px;
  .mt20 {
    margin-top: 20px;
  }
  .mb20 {
    padding-bottom: 20px;
  }
  .bottom {
    color: #ffffff;
    font-size: 8px;
    // height: 50px;

    font-size: 8px;
    font-family: ArialMT;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 16px;
  }
  .top {
    // height: 160px;
    .pic {
      // width: 115px;
      // float: left;
      // background-color:pink;
      // height: 60px;
      float: left;
      img {
        width: 168px;
        height: 50px;
      }
    }
    .table {
      color: #cccccc;
      padding-left: 35px;
      // height: 160px;
      font-size: 7px;
      font-weight: Regular;
      float: left;
      th,
      td {
        text-align: left;
        padding-right: 35px;
      }
      td {
        // padding-top: 7px;
        font-size: 7px;
        font-family: ArialMT;
        font-weight: 400;
        color: rgba(204, 204, 204, 1);
        line-height: 19px;
      }
      th {
        font-size: 9px;
        font-family: ArialMT;
        font-weight: 400;
        padding-bottom: 8px;
        color: rgba(255, 255, 255, 1);
        // line-height:21px;
      }
    }
    .search {
      width: 210px;
      float: right;
      // background-color: blue;
      // height: 160px;
      float: right;
      .tittle {
        font-size: 9px;
        font-family: Arial-BoldMT;
        font-weight: bold;
        color: rgba(204, 204, 204, 1);
        // line-height:21px;
      }
    }
    .logo {
      width: 100%;
      // background-color:red;
      ul {
        height: 40px;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        :nth-child(1) {
          img {
            width: 23px;
            height: 19px;
          }
        }

        :nth-child(2),
        :nth-child(4) {
          img {
            width: 22px;
            height: 22px;
          }
        }
        :nth-child(3) {
          img {
            width: 27px;
            height: 20px;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.search {
  .el-input__inner {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: #f6f9fe;
    padding-left: 20px;
    height: 30px;
    line-height: 30px;
    border: none;
  }
  .el-input-group__append,
  .el-input-group__prepend {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    cursor: pointer;
    color: #fff;
    font-weight: 700;
    background-color: #336598;
    border-color: #336598;
    width: 80px;
    height: 30px;
    // line-height: 30px;
    box-sizing: border-box;
    text-align: center;
    font-size: 12px;
    font-family: ArialMT;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
  .el-input-group {
    // width: 318px;
    // height: 32px;
    // line-height: 30px;;
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
