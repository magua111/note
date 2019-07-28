import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import VueLazyload from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import VueCookie from 'vue-cookie'
import "element-ui/lib/theme-default/index.css";
// import 'element-ui/lib/theme-chalk/index.css';
// import { userInfo } from './api'
import {
  Timeline,
  // TimelineItem,
  Button,
  Pagination,
  Checkbox,
  Form,
  FormItem,
  Carousel,
  CarouselItem,
  CheckboxButton,
  CheckboxGroup,
  Icon,
  Autocomplete,
  Loading,
  Message,
  Notification,
  Steps,
  Step,
  Table,
  TableColumn,
  Input,
  Dialog,
  Select,
  Rate,
  Option,
  Tabs,
  TabPane,
  Breadcrumb,
  BreadcrumbItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from 'element-ui'
// import { getStore } from '/utils/storage'
import VueContentPlaceholders from 'vue-content-placeholders'
Vue.use(VueContentPlaceholders)
Vue.use(Button)
console.log('TimelineItem===',Timeline)
Vue.use(Pagination)
Vue.use(Checkbox)
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Icon)
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Autocomplete)
Vue.use(Steps)
Vue.use(Step)

Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem)
Vue.use(Rate);
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Select)
Vue.use(Option)
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
Vue.use(infiniteScroll)
Vue.use(VueCookie)
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: 'dist/error.png',
  loading: '/static/images/load.gif'
  // attempt: 1
})
Vue.config.productionTip = false
// const whiteList = ['/home', '/goods', '/login', '/register', '/goodsDetails', '/thanks', '/search', '/refreshsearch', '/refreshgoods'] // 不需要登陆的页面
router.beforeEach(function (to, from, next) {
  // let params = {
  //   params: {
  //     token: getStore('token')
  //   }
  // }
  // userInfo(params).then(res => {
  //   if (res.result.state !== 1) { // 没登录
  //     if (whiteList.indexOf(to.path) !== -1) { // 白名单
  //       next()
  //     } else {
  //       next('/login')
  //     }
  //   } else {
  store.commit('RECORD_USERINFO', {
    info: {
      'address': null,
      'balance': null,
      'description': null,
      'email': null,
      'file': 'http://p77xsahe9.bkt.clouddn.com/1562919367042.png',
      'id': null,
      'message': '用户登录已过期',
      'phone': null,
      'points': null,
      'sex': null,
      'state': 0,
      'token': '7b0605f6-6fd4-4d75-898b-040b99639159',
      'username': 'test'
    }
  })
  //     if (to.path === '/login') { //  跳转到
  //       next({path: '/'})
  //     }
      next()
  //   }
  // })
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
