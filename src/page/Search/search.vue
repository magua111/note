<template>
  <div class="search_goods">

    <div class='container miaobaoxie'>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">QUARTET</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">DRY-SRASE BOARDS</el-breadcrumb-item>
        <el-breadcrumb-item ><span class='color333'>GLASS BOARDS</span></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="banner">
      <img src="../../../static/images/banner@2x.png" alt="">
    </div>
    <div class='messageBanner'>
      <div class='messageCenter'>Showing 17 of 17 Results For Glass Boards</div>
      <div class="message container">
        <div><span>Filters &nbsp;&nbsp; | &nbsp;&nbsp; Reset</span></div>

        <div>
          <el-dropdown>
            <span class="el-dropdown-link">
              Relevance<i class="el-icon-arrow-down el-icon--right"></i>
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
      </div>
    </div>
    <div class="filters container">
      <div class= "left fl">
        <div class="tittle">
          Filters
        </div>
        <ul class='type'>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChangeFilter">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </ul>
        <div class="tittle textl">
          Board Size
        </div>
        <ul class='type'>
          <el-checkbox-group v-model="checkedCitiesSize" @change="handleCheckedCitiesChangeSize">
            <el-checkbox v-for="city in citiesSize" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </ul>
        <div class="tittle textl">
          Featrue
        </div>
        <ul class='type'>
          <el-checkbox-group v-model="checkedCitiesFeatrue" @change="handleCheckedCitiesChangeFeatrue">
            <el-checkbox v-for="city in citiesFeatrue" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </ul>
        <div class="tittle textl">
          Frame
        </div>
        <ul class='type'>
          <el-checkbox-group v-model="checkedCitiesFrame" @change="handleCheckedCitiesChangeFrame">
            <el-checkbox v-for="city in citiesFrame" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </ul>
      </div>
      <div class="right">
        <div class="porduct" v-for="item in 15">
          <div class="pic">
            <img src="../../../static/images/1564063374(1).jpg" alt="">

          </div>
          <div class="tittle">Quartet Evoque Magnetic Glass </div>
          <div class="name">Dry-Erase Boards</div>
          <div class="star">
            <el-rate
              v-model="value1"
              disabled
              show-score
              text-color="#facd0c"
             >
            </el-rate>
            <span>({{value1}})</span>
            <span class='starCount'>17Reviews</span>
          </div>
          <p class='starting'>starting at</p>
          <p class='number'>$66.99</p>
          <div class="triangle">
            <p class='price'>50%</p>
            <p class='sell'>SAVING</p>
          </div>
        </div>
      </div>
    </div>
    <div class='choosePage'>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="30">
      </el-pagination>
    </div>
  </div>
</template>
<script>

  const cityOptions = ['White Boards', 'Office Boards', 'Mobile Boards', 'Cork Boards'];
  const cityOptionsSize = ['12*24', '24*36', '36*48', '48*72'];
  const cityOptionsFeatrue = ['Magneic', 'No-magneic', 'Reversible'];
  const cityOptionsFrame = ['Sliver Aluminum', 'Black', 'OAK'];
  export default {
    data () {
      return {
        checked: false,
        checkAll: false,
        checkedCities: ['Cork Boards'],
        cities: cityOptions,
        isIndeterminate: true,
        checkedSize: false,
        checkAllSize: false,
        checkedCitiesSize: ['48*72'],
        citiesSize: cityOptionsSize,
        isIndeterminateSize: true,
        checkedFeatrue: false,
        checkAllFeatrue: false,
        checkedCitiesFeatrue: ['48*72'],
        citiesFeatrue: cityOptionsFeatrue,
        isIndeterminateFeatrue: true,


        checkedFrame: false,
        checkAllFrame: false,
        checkedCitiesFrame: ['OAK'],
        citiesFrame: cityOptionsFrame,
        isIndeterminateFrame: true,
        value1: 3.7,
        colors: ['#facd0c', '#facd0c', '#facd0c']
      }
    },
    methods: {
      handleCheckedCitiesChangeFilter(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },


      handleCheckedCitiesChangeSize(value) {
        let checkedCountSize = value.length;
        this.checkAllSize = checkedCountSize === this.citiesSize.length;
        this.isIndeterminateSize = checkedCountSize > 0 && checkedCountSize < this.citiesSize.length;
      },

      handleCheckedCitiesChangeFeatrue(value) {
        let checkedCountFeatrue = value.length;
        this.checkAllFeatrue = checkedCountFeatrue === this.citiesFeatrue.length;
        this.isIndeterminateFeatrue = checkedCountFeatrue > 0 && checkedCountFeatrue < this.citiesFeatrue.length;
      },


      handleCheckedCitiesChangeFrame(value) {
        let checkedCountFrame = value.length;
        this.checkAllFrame = checkedCountFrame === this.citiesFrame.length;
        this.isIndeterminateFrame = checkedCountFrame > 0 && checkedCountFrame < this.citiesFrame.length;
      }
    },

  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/style/mixin";
  @import "../../assets/style/theme";
  .search_goods{
    margin-top: 124px;
    // height: 600px;
    background-color: #fff;
    .choosePage{
      text-align: center;
      margin: 25px 0;
    }
    .messageBanner{
      position: relative;
      .messageCenter{
        // background-color:red;
        position: absolute;
        left: 50%;
        height: 70px;
        line-height: 70px;
        transform: translateX(-50%);
        font-size:15px;
        font-weight:400;
        color:rgba(255,255,255,1);


        font-family:ArialMT;
      }
    }
    .filters{
      // height: 500px;
      margin-bottom: 10px;
      overflow: hidden;
      background-color: #fff;
      // padding: 0 15px;
      .left{
        width: 179px;
        margin-bottom: 30px;
        padding:0 10px;

        font-size:15px;
        font-family:ArialMT;
        font-weight:400;
        color:rgba(51,51,51,1);
        // height: 500px;
        // background-color: pink;
        // border-right: 1px solid #d0d0d0;
        .tittle{
          color: #242424;
          font-size: 16px;
          text-align: center;
          height: 60px;
          line-height: 60px;
          border-bottom: 1px solid  #d0d0d0;

          font-size:15px;
          font-family:ArialMT;
          font-weight:400;
          color:rgba(51,51,51,1);



        }
        .textl{
          text-align: left;
          padding-left: 20px;
        }
         .type {


         }

      }
      .right{
        // float: right;
        width: 780px;
        // margin-left: 230px;
        overflow:hidden;
        float: right;
        // display: flex;
        // align-content: stretch;
        // flex-wrap:  wrap ;
        .porduct{
          float: left;
          margin-top: 18px;
          // display: flex;
          margin-left: 13px;
          position: relative;
          width: 247px;
          // width:
          // background-color: #ccc;
          border:1px solid rgba(210,210,210,1);
          padding: 10px;
          .pic{
            // background-color: pink;
            height: 245px;
            line-height: 245px;
            img{
              width: 100%;
            }
          }
          .tittle,.name{
            font-size: 20px;
            color: #222222;
            height: 35px;
            line-height: 35px;

            // width:212px;
            // height:41px;
            font-size:15px;
            font-family:ArialMT;
            font-weight:400;
            color:rgba(51,51,51,1);


          }
          .star{
            height: 40px;
            line-height: 40px;
            color: #222222;


            font-size:12px;
            font-family:STHeitiSC-Light;
            font-weight:300;
            color:rgba(51,51,51,1);
            .starCount{
              font-size:12px;
              font-family:ArialMT;
              font-weight:400;
              color:rgba(51,51,51,1);
            }
          }
          .starting{
            margin-top: 10px;


            font-size:15px;
            font-family:Arial-BoldMT;
            font-weight:bold;
            color:rgba(51,51,51,1);


          }
          .number{
             font-size:18px;
             padding-top: 10px;
            font-family:Arial-BoldMT;
            font-weight:bold;
            color:rgba(51,51,51,1);
          }

          .triangle {
            width: 0;
            height: 0;
            border: 70px solid red;
            border-top-color: #349933;
            border-bottom: none;
            border-left-color: transparent;
            border-right-color: transparent;
            transform: rotate(-45deg);
            position: absolute;
            bottom: -11px;
            right: -46px;
            .price{
              position: absolute;
              top: -60px;
              left: -1px;
              transform: rotate(45deg);
              font-weight: 700;
              font-size:15px;
              font-family:Arial-BoldMT;
              font-weight:bold;
              color:rgba(255,255,255,1);
            }

            .sell{
               position: absolute;
              top: -43px;
              left: -29px;
              -webkit-transform: rotate(45deg);
              transform: rotate(45deg);
              font-size: 12px;
              font-weight: 700;

              font-size:12px;
              font-family:ArialMT;
              font-weight:400;
              color:rgba(255,255,255,1);
            }
        }


        }
      }
    }
    .message{
      padding: 0 30px;
      background-color: #313131;
      height: 70px;
      line-height: 70px;
      font-weight: 700;
      display: flex;
      justify-content: space-between;

     font-size:15px;
      font-family:ArialMT;
      font-weight:400;
      color:rgba(255,255,255,1);


    }

    .banner{
      // height: 330px;
      width: 960px;
      // background-color:#ccc;
      margin: 0 auto;
      img{
        width: 100%;
      }
    }
  }
</style>
<style>
    .type .el-checkbox__label {
      padding-left: 12px;
    }

    .choosePage .el-pager li {
        padding: 0 4px;
        border-right: 0;
        background: #FFFFFF;
        font-size: 13px;
        min-width: 23px;
        height: 23px;
        line-height: 23px;
        text-align: center;
        margin: 0 5px;
        border: 1px solid rgba(0,0,0,1);
        font-size: 12px;
        font-family: ArialMT;
        font-weight: 400;
        color: rgba(51,51,51,1);
    }

    .choosePage .el-pager li.active {
      border-color:#000000;
      background:#000000;
      color: #fff;
      cursor: default;
    }

    .choosePage .el-pagination .btn-prev ,.choosePage .el-pagination .btn-next{
        border: none;
        height: 24px;
        margin-right: 44px;
        line-height: 14px;
    }
    .choosePage .el-pagination .btn-prev:hover ,.choosePage .el-pagination .btn-next:hover{
     color:#000000;
    }

    .choosePage .el-pagination .btn-next{
      margin-right: 0;
      margin-left: 44px;
    }

    .choosePage .el-pager li.active+li {
        border-left:  1px solid rgba(0,0,0,1);
        padding-left: 5px;
    }
    .search_goods .el-rate__icon{
      font-size: 12px;
      padding-bottom: 4px;
    }


    .type .el-checkbox{
      display: block;
      margin-left: 0;;
      color:#000000;
      padding: 10px 0;
      text-align: left;
      border-bottom: 1px solid  #d0d0d0;
      border: none;
      padding-left: 10px;
    }

    .search_goods .el-rate{
      display: inline;
    }
    .search_goods .el-breadcrumb{
      display: inline-block;
    }



     /* p:nth-of-type(1),p:nth-of-type(3) */



    .type:nth-of-type(1) .el-checkbox{
      display: block;
      margin-left: 0;;
      color:#000000;
      padding: 10px 0;
      text-align: left;
      /* background-color: red; */
      border-bottom: 1px solid  #d0d0d0;
          padding-left: 10px;
    }

    .type:nth-of-type(4){
      border-bottom: 1px solid  #d0d0d0;
    }

    .search_goods .el-checkbox__input.is-checked  .el-checkbox__inner{
      background-color: #313131;
      border-color: #313131;
    }

    .search_goods .el-breadcrumb__item__inner, .search_goods .el-breadcrumb__item__inner a{
      color: #999999;
      font-size: 12px;
      font-weight: 400;
    }



    .is-focus{
      border-color: #313131!important;
    }

    .miaobaoxie{
      padding:0 30px;
    }
   .search_goods .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
  .search_goods .el-icon-arrow-down {
    font-size: 12px;
  }
  .search_goods .el-dropdown-menu__item{
    color: #333;
    text-align: center;
  }
</style>
