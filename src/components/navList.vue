<template>
  <div class="nav">
    <div class="container">
      <ul>
        <li>Dry-Erase Boards</li>
        <li>Bulletin Boards</li>
        <li>Mobile Boards</li>
        <li>Glass Boards</li>
        <li>office supplier</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang='scss' scoped>
  .nav{
    height: 63px;
    line-height: 63px;
    background-color: #336699;
    width: 960px;
    margin: 0 auto;
    // margin-top: 62px;
    .container{
      padding: 0 30px;;
      ul{
        display: flex;
        justify-content: space-between;
        li{
          // float: left;
          // width: 20%;
          font-weight: Bold;
          font-size: 15px;
          font-weight: Bold;
          color: #FFFFFF;
          text-align: center;

          font-size:15px;
          font-family:Arial-BoldMT;
          font-weight:bold;
          color:rgba(255,255,255,1);
          // line-height:21px;
          cursor: pointer;
        }
      }
    }
  }
</style>
