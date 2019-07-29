<template>
  <div class='register clearfix'>
    <div>
      <div class="signAndCreat">
           <el-tabs v-model="activeName" @tab-click="registerOrLogin">
              <el-tab-pane label="SING-IN" name="first">
                <div class='sign'>
                  <el-form  :label-position="labelPosition" label-width="80px" :rules="rules" ref="loginForm" :model="loginForm">
                  <!-- <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">  -->
                    <el-form-item label="Email address or mobile phone number" prop="name" class='userName' >
                      <el-input v-model="loginForm.name" placeholder='Please enter the'></el-input>
                    </el-form-item>
                    <el-form-item label="Password" prop="password" class='passwordForget'>
                      <router-link :to="{ path: '/forgetPassword' }">
                        <span class='passwordForgetTittle'>Forgot  your  password?</span>
                      </router-link>
                      <el-input v-model="loginForm.password" placeholder='Please enter the' ></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="submitFormLogin('loginForm')">SIGN-IN</el-button>
                    </el-form-item>
                  </el-form>
                  <p class='loginTittle'>By continuing to operate, you agree to amazon's terms of use an privacy statement.</p>
                  <div>
                    <el-checkbox class='remberLogin' v-model="remenber" >Remember the login status.</el-checkbox>
                    <el-dropdown>
                      <span class="el-dropdown-link">
                        Details<i class="el-icon-arrow-down el-icon--right"></i>
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
              </el-tab-pane>
              <el-tab-pane label="CREAT ACCOUNT" name="second">
                <div class='sign'>
                   <el-form  :label-position="labelPosition" label-width="80px" :rules="rulesRegister" :disabled='true'  ref="registerForm" :model="registerForm">
                  <!-- <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">  -->
                    <el-form-item label="Your name" prop="name" >
                      <el-input v-model="registerForm.name" placeholder='Please enter the'></el-input>
                    </el-form-item>
                    <el-form-item label="Email" prop="Email">
                      <el-input v-model="registerForm.email" placeholder='Please enter the' ></el-input>
                    </el-form-item>
                    <el-form-item class='passwordItem' label="Password" prop="Password">
                      <el-input v-model="registerForm.password" placeholder='At least 6 characters' ></el-input>
                    </el-form-item>
                    <div class='passwordRule'><img src="../../../static/images/message.png" alt=""> passwords must be at least 6 characters.</div>
                    <el-form-item label="Re-enter   Password" prop="RPassword">
                      <el-input v-model="registerForm.RPassword" placeholder='Please enter the' ></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="submitFormLogin('registerForm')">CREAT  YOUR  ACCOUNT</el-button>
                    </el-form-item>
                  </el-form>
                  <p class='loginTittle'>By continuing to operate, you agree to amazon's terms of use an privacy statement.</p>

                </div>
              </el-tab-pane>
            </el-tabs>
      </div>
      <div class="hotPru">
        <!-- <div class="topPic clearfix"> -->
          <div class='hotPruMessage'>
            <div class='hotItem'>HOT  ITEM</div>
              <div style='width:230px'>
                <el-carousel indicator-position="outside" arrow='always'>
                  <el-carousel-item v-for="item in 4" :key="item">
                    <img src="../../../static/images/1564063374(1).jpg" alt="">
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class='productMessage'>
                <p class='discript'>Quartet Evoque Magnetic Glass</br> Dry-Erase Boards</p>
                <div class="star">
                  <el-rate
                    v-model="value1"
                    disabled
                    show-score
                    text-color="#facd0c"
                    score-template="{value1}">
                  </el-rate>
                  <span>({{value1}})</span>
                  <span class='starCount'>17Reviews</span>
                </div>
                <p class='starting'>starting at</p>
                <p class='number'>$66.99</p>
              </div>
          </div>

        </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 2.8,
        remenber: false,
        activeName: 'first',
        labelPosition: 'top',  // lable 和 input的位置
        loginForm: {      // 登陆信息
          name: '',
          password: '',
        },
        rules: {
          name: [
            {  message: '请输入名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            {  message: '请输入密码', trigger: 'change' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        },

        registerForm: {
          name: '',
          password: '',
        },
        rulesRegister: {
          name: [
            {  message: '请输入名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            {  message: '请输入密码', trigger: 'change' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        },
      };
    },
    methods: {
       submitFormLogin(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      registerOrLogin(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style lang="scss">
  .register{

    .el-input__inner{
      height:45px;
      background:rgba(255,255,255,1);
      border:1px solid rgba(13,13,13,1);
      border-radius:23px;
      padding-right: 50px;
      padding-left: 20px;
    }
    .el-form-item__error{
      left: 20px;
    }
    .el-form--label-top .el-form-item__label{
      font-size:15px;
      font-family:ArialMT;
      font-weight:400;
      color:rgba(51,51,51,1);
    }

    .el-tabs__item.is-active {
      color: #333333;
    }
    .el-rate__icon{
      font-size: 12px;
      display: inline;
    }
    .el-rate{
      display: inline;
    }

    .hotPru{
      .el-carousel__arrow--right, .el-carousel__arrow--left{
        display: none;
      }
      .el-carousel__indicator{
        // background:rgba(255,255,255,1);
        // width: 22px;
      }
      .el-carousel__indicators--outside button{
        margin-top: 15px;
        // background:rgba(13,13,13,1);
        // opacity:0.22;
      }
      .el-carousel__indicator.is-active button{
        background-color: #0D0D0D!important;
        // background-color:red;
      }


      .el-carousel__container{
        height: 170px;
      }
       .el-carousel__item h3 {
          color: #475669;
          font-size: 18px;
          opacity: 0.75;
          line-height: 300px;
          margin: 0;
        }

        .el-carousel__item:nth-child(2n) {
          background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n+1) {
          background-color: #d3dce6;
        }
    }

    .sign {
      border-right: 1px solid rgba(210,210,210,1);
      .el-dropdown-link{
        font-size:18px;
        font-family:ArialMT;
        font-weight:400;
        color:rgba(51,102,153,1);
      }
      .el-icon--right{
        font-size: 12px;
      }


      .el-button--primary{
        width: 100%;
        height:45px;
        background:rgba(13,13,13,1);
        border:1px solid rgba(13,13,13,1);
        border-radius:22px;
        margin-top: 25px;
      }
      .el-checkbox__inner{
        width: 15px;
        height: 15px;
        line-height: 15px;
        // background:rgba(255,255,255,1);
        border:1px solid rgba(13,13,13,1);
        // margin-right: 4px;
      }
      .el-checkbox__inner:after{
        left: 4px;
      }
      .el-checkbox__input.is-checked .el-checkbox__inner{
        background-color: #0d0d0d;
      }
      .el-form-item{
        margin-bottom: 0px;
      }
      .passwordItem{
        margin-bottom: 10px;
      }
    }
  }

</style>

<style lang="scss" scoped>
    .register {
      .sign{
        // padding-top: 10px;
        padding-right: 45px;
        .passwordRule{
          font-size:15px;
          font-family:ArialMT;
          font-weight:400;
          color:rgba(51,102,153,1);
          text-align: right;
          // padding-bottom: 10px;
          height: 30px;
          line-height: 30px;
          // margin-bottom: 15px;
          padding-right: 20px;
          // position: relative;
          img{
            padding-top: 8px;
            float: left;
            margin-left: 10px;
            display: inline-block;
            width: 16px;
          }
        }

        .loginTittle{
          font-size:12px;
          font-family:ArialMT;
          font-weight:400;
          color:rgba(51,51,51,1);
          line-height: 20px;
          margin-top: 20px;
        }
        .remberLogin{
          margin-top: 10px;
        }
        .userName{
          position: relative;
        }
        .userName :after{
          position: absolute;
          contant: '';
          height: 13px;
          width: 23px;
          // background-color:red;
          background:url(../../../static/images/suo@2x.png)  ;
          background-size: cover;
          top: 50%;
          transform: translateY(-50%);
          right: 15px;
        }
        .passwordForget{
          position: relative;
          .passwordForgetTittle{
              position: absolute;
              font-size: 12px;
              font-family: ArialMT;
              font-weight: 400;
              text-decoration: underline;
              color: #336699;
              top: -34px;
              right: 18px;
              display: inline-block;
              cursor: pointer;
              height: 30px;
              line-height: 30px;
          }
        }
      }

      .signAndCreat{
        font-size:15px;
        font-family:ArialMT;
        font-weight:400;
        color:rgba(153,153,153,1);
        float: left;
        width: 500px;
        padding: 0 50px;
        padding-right: 50px;
        // background-color: blue;
      }
      .hotPru{
        position: relative;
        top: 45px;
        .hotItem{
          position: absolute;
          z-index: 555;
          width:114px;
          height:40px;
          line-height: 40px;
          text-align: center;
          background:rgba(255,51,51,1);
          font-size:15px;
          font-family:Arial-BoldMT;
          font-weight:bold;
          color:rgba(255,255,255,1);
          top: -20px;
          left: 35px;
        }
        .hotPruMessage{
          position: relative;
          padding-left: 90px;
          // left: 50%;
          // transform: translateX(-50%);

          img{
            width: 230px;
          }
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
            // margin-top: 10px;


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


        .discript{
          text-align: left;
          font-size:14px;
          font-family:ArialMT;
          font-weight:400;
          color:rgba(51,51,51,1);
          line-height: 1.8;
          // margin-bottom: 10px;
        }
        margin-left: 500px;
        // height: 50px;
        // background-color: red;
        // padding-top: 50px;
        // height: 462px;

      }
      padding: 50px;
      padding-top: 30px;
      padding-right: 0;
      width: 960px;
      margin: 0 auto;
      margin-top: 124px;
      margin-bottom: 30px;
    }
</style>
