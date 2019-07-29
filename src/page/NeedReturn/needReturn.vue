<template>
  <div class="needReturn">
    <div class='miaobaoxie'>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">YOUR ACCOUNT</el-breadcrumb-item>
        <el-breadcrumb-item><span class='color333'>NEED TO RETURN</span></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class='searchordersDetail clearfix'>
      <div class='headline'>
        <p class='yourTittle'>PLEASE SELECT THE ITEM THAT NEEDS TO BE RETURNED OR REPLACED</p>
      </div>
    </div>

    <div class="orderList clearfix" v-for='item in 6'>
      <div class="orderDitail">
        <p>order time</br>2019/07/09  19:24:30</p>
        <p>The order number</br>34327482374327</p>
      </div>
      <div class="pruDetail clearfix">
        <div class="pic"></div>
        <div class="pruDetailNum">
          <p>Quartet Evoque Magnetic Glass Dry-Erase Boards</p>
          <p>The seller：xxx</p>
          <p>Delivery date</p>
          <p>Number：1</p>
        </div>
        <div class="pruWay">
          <p>why</p>
          <div class="selectWay">
             <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </div>
          <p>Before the return of the goods   2019-7-3</p>
          <div class='goON'>GO ON</div>
        </div>
      </div>
    </div>


  </div>
</template>



<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>




<style>
  .needReturn .el-input__inner{
    height: 35px;
    line-height: 35px;
    /* border:1px solid rgba(210,210,210,1); */
  }
  .needReturn .el-input__inner {
    border:1px solid rgba(210,210,210,1)!important;
  }
  .needReturn .el-select{
    width: 100%;
    /* border:1px solid rgba(210,210,210,1); */
  }

</style>

<style lang='scss' scoped>
  .needReturn{
    .orderList{
      margin: 15px;
      // height: 300px;
      border:1px solid rgba(51,51,51,1);
      border:1px solid rgba(210,210,210,1);
      box-shadow:0px 7px 8px 0px rgba(102,102,102,0.09);
      padding: 20px;
      .pruDetail{
        padding-top: 10px;
        .selectWay{
          padding: 5px 0;
        }
        .goON{
          margin-top: 10px;
          text-align: center;
          height:33px;
          line-height: 33px;
          background:rgba(51,102,153,1);
          border-radius:16px;
          font-size:15px;
          font-family:Arial-BoldMT;
          font-weight:bold;
          color:rgba(255,255,255,1);
        }
        .pruWay{
          width: 330px;
          float: right;
          p:nth-child(1) {
            text-align: left;
            font-size:15px;
            font-family:Arial-BoldMT;
            font-weight:bold;
            color:rgba(51,51,51,1);
          }
          p:nth-child(2) {
            font-size:12px;
            font-family:ArialMT;
            font-weight:400;
            color:rgba(153,153,153,1);
          }
        }
        .pruDetailNum{
          padding-left: 25px;
          float: left;
          font-size:15px;
          font-family:ArialMT;
          font-weight:400;
          line-height: 25px;
          color:rgba(51,51,51,1);
        }
        .pic{
          float: left;
          width: 125px;
          height: 80px;
          background-color: pink;
        }
      }
      .orderDitail{
        font-size:12px;
        font-family:Arial-BoldMT;
        font-weight:bold;
        color:rgba(51,51,51,1);
        p{
          display: inline-block;
          line-height: 20px;
        }
        p:nth-child(1) {
          width: 210px;
        }

      }
    }
    width: 960px;
    margin-top: 124px;
  }
</style>
