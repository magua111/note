<template>
  <div class='orders'>
    <div class='container miaobaoxie'>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">YOUR ACCOUNT</el-breadcrumb-item>
        <el-breadcrumb-item><span class='color333'>YOUR ORDERS</span></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class='searchOrders clearfix'>
      <div class='headline'>
        <p class='yourTittle'>YOUR ORDERS</p>
        <div class="nav-list">
          <!-- <el-autocomplete
            placeholder="SEARCH"
            icon="search"
            v-model="input"
            :fetch-suggestions="querySearchAsync"
            @select="handleSelect"
            :on-icon-click="handleIconClick"
            @keydown.enter.native="handleIconClick"
          >
          </el-autocomplete> -->


          <el-input placeholder="SEARCH" v-model="input">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>

      <div class="orderType">
        <el-tabs
          v-model="activeName"
          @tab-click="forgertPassWordOrLogin"
        >
          <el-tab-pane
            label="ALL ORDERS"
            name="first"
          >
          </el-tab-pane>
          <el-tab-pane
            label="Pending Shipment Orders"
            name="seconed"
          >
          </el-tab-pane>
          <el-tab-pane
            label="Goods Undelivered Orders"
            name="third"
          >
          </el-tab-pane>
        </el-tabs>

        <div class="orderList">
          <div class='orderChoose'>
            <span class='orderCount'> 0 orders placed in </span>
            <div class='selectDown'>
              <el-dropdown>
                <span class="el-dropdown-link">
                  past 6 moths<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                  <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div class="orderListDetail"  v-for='item in 6'>
              <div class="top">
                <table>
                  　<tr>
                    　　　　<th>order time</th>
                    　　　　<th>total price</th>　
                    　　　　<th>distribution to</th>　
                    　　　　<th>order number 1223-2323</th>　
                    　　</tr>
                  　<tr>
                    　　　　<td>2019/07/09 19:24:30</td>
                    　　　　<td class='red'>$100.0</td>
                    　　　　<td style='padding-left:23px'>

                      <div class='selectDown'>
                        <el-dropdown>
                          <span class="el-dropdown-link">
                            ****<i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                          <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                      </div>

                    </td>
                    　　　　<td class='txr checkDetail'>
                              <router-link :to="{ path: '/orderDetail' }">
                                check the order details
                              </router-link>
                            </td>
                    　　</tr>
                </table>
              </div>
              <div class="bottom">
                <div class="orderPic"></div>
                <div class="picMessage">
                  <div class="pruName">
                    Quartet Evoque Magnetic Glass Dry-Erase Boards
                  </div>
                  <div class="pruNum">
                    number:2
                  </div>
                  <div class="pruState">
                    <div class="price">$100.0</div>
                    <div class="isOnWay">on the way </div>
                  </div>
                </div>
                <div class="choeeseBut clearfix">
                  <div class="checkPage">Track your package</div>
                  <div class="return">Need to return</div>
                </div>
              </div>
            </div>
          </div>
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
      user: {},
      // 查询数据库的商品
      st: false,
      input2: "",
      // 头部购物车显示
      cartShow: false,
      positionL: 0,
      positionT: 0,
      timerCartShow: null, // 定时隐藏购物车
      input: "",
      choosePage: -1,
      searchResults: [],
      timeout: null,
      token: "",
      navList: [],
      activeName: "first"
    };
  },
  computed: {
    ...mapState(["cartList", "login", "receiveInCart", "showCart", "userInfo"]),
    // 计算价格
    totalPrice() {
      var totalPrice = 0;
      this.cartList &&
        this.cartList.forEach(item => {
          totalPrice += item.productNum * item.salePrice;
        });
      return totalPrice;
    },
    // 计算数量
    totalNum() {
      var totalNum = 0;
      this.cartList &&
        this.cartList.forEach(item => {
          totalNum += item.productNum;
        });
      return totalNum;
    }
  },
  methods: {
    ...mapMutations([
      "ADD_CART",
      "INIT_BUYCART",
      "ADD_ANIMATION",
      "SHOW_CART",
      "REDUCE_CART",
      "RECORD_USERINFO",
      "EDIT_CART"
    ]),

    forgertPassWordOrLogin(tab, event) {
      console.log(tab, event);
    },

    handleIconClick(ev) {
      if (this.$route.path === "/search") {
        this.$router.push({
          path: "/refreshsearch",
          query: {
            key: this.input
          }
        });
      } else {
        this.$router.push({
          path: "/search",
          query: {
            key: this.input
          }
        });
      }
    },
    showError(m) {
      this.$message.error({
        message: m
      });
    },

    // 搜索框提示
    loadAll() {
      let params = {
        params: {
          key: this.input
        }
      };
      getQuickSearch(params).then(res => {
        if (res === null || res === "") {
          return;
        }
        if (res.error) {
          this.showError(res.error.reason);
          return;
        }
        var array = [];
        var maxSize = 5;
        if (res.hits.hits.length <= 5) {
          maxSize = res.hits.hits.length;
        }
        for (var i = 0; i < maxSize; i++) {
          var obj = {};
          obj.value = res.hits.hits[i]._source.productName;
          array.push(obj);
        }
        if (array.length !== 0) {
          this.searchResults = array;
        } else {
          this.searchResults = [];
        }
      });
    },
    querySearchAsync(queryString, cb) {
      if (this.input === undefined) {
        cb([]);
        return;
      }
      this.input = this.input.trim();
      if (this.input === "") {
        cb([]);
        return;
      } else {
        this.loadAll();
        setTimeout(() => {
          cb(this.searchResults);
        }, 300);
      }
    },
    handleSelect(item) {
      this.input = item.value;
    },
    // 购物车显示
    cartShowState(state) {
      this.SHOW_CART({ showCart: state });
    },
    // 登陆时获取一次购物车商品
    _getCartList() {
      getCartList({ userId: getStore("userId") })
        .then(res => {
          if (res.success === true) {
            setStore("buyCart", res.result);
          }
          // 重新初始化一次本地数据
        })
        .then(this.INIT_BUYCART);
    },
    // 删除商品
    delGoods(productId) {
      if (this.login) {
        // 登陆了
        cartDel({ userId: getStore("userId"), productId }).then(res => {
          this.EDIT_CART({ productId });
        });
      } else {
        this.EDIT_CART({ productId });
      }
    },
    toCart() {
      this.$router.push({ path: "/cart" });
    },
    // 控制顶部
    navFixed() {
      if (
        this.$route.path === "/goods" ||
        this.$route.path === "/home" ||
        this.$route.path === "/goodsDetails" ||
        this.$route.path === "/thanks"
      ) {
        var st = document.documentElement.scrollTop || document.body.scrollTop;
        st >= 100 ? (this.st = true) : (this.st = false);
        // 计算小圆当前位置
        let num = document.querySelector(".num");
        this.positionL = num.getBoundingClientRect().left;
        this.positionT = num.getBoundingClientRect().top;
        this.ADD_ANIMATION({
          cartPositionL: this.positionL,
          cartPositionT: this.positionT
        });
      } else {
        return;
      }
    },
    // 退出登陆
    _loginOut() {
      let params = {
        params: {
          token: this.token
        }
      };
      loginOut(params).then(res => {
        removeStore("buyCart");
        window.location.href = "/";
      });
    },
    openProduct(productId) {
      window.open(
        "//" + window.location.host + "/#/goodsDetails?productId=" + productId
      );
    },
    _getNavList() {
      navList().then(res => {
        this.navList = res.result;
      });
    }
  }
};
</script>




<style lang="scss" scoped>
.orders {
  padding-top: 124px;
  width: 960px;
  // background-color: red;
  margin: 0 auto;
  // padding: 20px;
  .orderList {
    .orderChoose {
      .orderListDetail {
        width: 100%;
        // background-color: pink;
        // height: 300px;
        margin-top: 10px;
        border: 1px solid rgba(210, 210, 210, 1);
        padding: 15px 20px;
        padding-bottom: 0;
        .top {
          padding-bottom: 13px;
          border-bottom: 1px solid rgba(210, 210, 210, 1);
          table {
            width: 100%;
            th {
              width: 25%;
              text-align: left;
              font-size: 12px;
              font-family: Arial-BoldMT;
              font-weight: bold;
              color: rgba(51, 51, 51, 1);
            }
            td {
              padding-top: 4px;
              font-size: 12px;
              font-family: Arial-BoldMT;
              font-weight: bold;
              color: rgba(51, 51, 51, 1);
            }
            .txr {
              text-align: right;
            }
            .red {
              color: rgba(255, 51, 51, 1);
            }
            .checkDetail {
              font-size: 12px;
              font-family: Arial-BoldMT;
              font-weight: bold;
              text-decoration: underline;
              color: rgba(51, 102, 153, 1);
            }
            th:nth-child(4) {
              text-align: right;
            }
          }
        }
        .bottom {
          padding: 20px 15px;
          padding-right: 0;
          .choeeseBut {
            float: right;
            .checkPage {
              font-size: 18px;
              cursor: pointer;
              font-family: ArialMT;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              background: rgba(13, 13, 13, 1);
              border: 1px solid rgba(13, 13, 13, 1);
              border-radius: 16px;
              height: 33px;
              line-height: 33px;
              width: 230px;
              text-align: center;
            }
            .return {
              cursor: pointer;
              margin-top: 10px;
              font-size: 15px;
              font-family: ArialMT;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              background: rgba(51, 102, 153, 1);
              border-radius: 16px;
              height: 33px;
              line-height: 33px;
              text-align: center;
              width: 230px;
            }
          }

          .picMessage {
            display: inline-block;
            padding-left: 25px;
            vertical-align: top;
          }
          .isOnWay {
            font-size: 12px;
            font-family: ArialMT;
            display: inline-block;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            padding-left: 45px;
            position: relative;
          }
          .price {
            padding-right: 22px;
            border-right: 1px solid rgba(210, 210, 210, 1);
            font-size: 15px;
            display: inline-block;
            font-family: ArialMT;
            font-weight: 400;
            color: rgba(255, 51, 51, 1);
          }
          .isOnWay:after {
            content: "";
            width: 21px;
            height: 19px;
            // background-color:red;
            background: url(../../../static/images/yunshu@2x.png);
            background-size: cover;
            position: absolute;
            left: 18px;
            top: -3px;
          }
          .pruNum {
            font-size: 15px;
            font-family: ArialMT;
            font-weight: 400;
            padding: 10px 0;
            color: rgba(51, 51, 51, 1);
          }
          .pruName {
            font-size: 15px;
            padding-top: 3px;
            font-family: ArialMT;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
          }
          .orderPic {
            width: 125px;
            height: 80px;
            background: pink;
            // float: left;
            display: inline-block;
          }
        }
      }

      .orderCount {
        display: inline-block;
        padding-right: 20px;
        font-size: 12px;
        font-family: ArialMT;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
      }
      .selectDown {
        display: inline-block;
        font-size: 12px;
        font-family: Arial-BoldMT;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
      }
    }
  }


  .searchOrders {
    padding: 0 20px;
    // margin-bottom: 10px;

    .nav-list {
      display: inline-block;
      position: relative;
      //  float: left;
    }
  }
}
</style>

<style lang='scss'>
// table样式
.orders .el-input {
    position: relative;
    font-size: 14px;
    line-height: 23px;
}
#app .orders .el-tabs__item.is-active {
  font-size: 15px;
  font-family: Arial-BoldMT;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}

#app .orders .el-tabs__header {
  border-bottom: 1px solid rgba(210, 210, 210, 1);
}

#app .orders .el-tabs__item {
  font-size: 15px;
  font-family: Arial-BoldMT;
  font-weight: bold;
  color: rgba(153, 153, 153, 1);
}
#app .orders .el-tabs__active-bar {
  width: 71px;
  height: 1px;
  background: rgba(0, 0, 0, 1);
  max-width: 70px !important;
}

.orders {
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
      border: 1px solid #888!important;
      border-top-left-radius: 13px;
      border-bottom-left-radius: 13px;
      border-color: #c6c6c9;
      height: 25px;
      font-size:8px;
      font-family:ArialMT;
      font-weight:400;
      color:rgba(153,153,153,1);

    }
    .el-input-group__append, .el-input-group__prepend{
      border-radius: 13px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      background-color: #888;
      border: none;
      color: #fff;
    }

    .el-icon-search:before {
      font-size: 15px;
    }
  }
}
</style>
