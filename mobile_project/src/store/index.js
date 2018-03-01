import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

var config = {
  rootUrl:'https://cnodejs.org/api/v1',
  topics:'/topics',
  topic:'/topic',
  userInfo:'/user'
};

export default new Vuex.Store({
  state:{
    list_of:'all',
    list:[],
    page:1,
    pageContent:null,
    pageReplies:null,
    pageData:null,
    accessToken:'41b6db80-c8cf-4d77-b525-676aae89761f',
    userInfo:{
      userName:'lihuihui8787',
      userPaserWord:'13111215087fei'
    },
    userInfos:null,
    loginState:false,
    routeState:false,
    mesInfos:{
      title:'',
      tab:'',
      content:''
    }


  },
  getters:{

  },
  mutations:{
    editList(state,list){
      state.list = list;//修改数据库中的list内容
    },
    editListName(state,name){
      state.list_of= name;
    },
    editPage(state,num){
      state.page = num;
    },
    editPageMes(state,data){
      state.pageContent=data.content;
      state.pageReplies = data.replies;
      state.pageData = data;
    },
    editLoad(state,boll){
      state.load = boll;
    },
    editRouteState(state,boll){
      state.routeState = boll;
    },
    editUserInfo(state,data){
      state.userInfos=data;
    },
    editLoginState(state,bool){
      state.loginState=bool;
    },
    editPostMes(state,postContent){
      Object.assign(state.mesInfos,postContent)
    }
  },
  actions:{
    getList(context){
      let {rootUrl,topics}=config;
      return axios.get(rootUrl+topics,{
        params:{
          tab:context.state.list_of,
          page:context.state.page
        }
      })
        .then(data=>{
          context.commit('editList',data.data.data)
        })
    },
    getContent(context,id){
      let {rootUrl,topic}=config;
      return axios.get(rootUrl+topic+'/'+id
      )
        .then(data=>{
          context.commit('editPageMes',data.data.data);
        })
    },
    getUserInfo(context){
      let {rootUrl,userInfo} = config;
      return axios.get(rootUrl+userInfo+'/'+context.state.userInfo.userName).then(data=>{
        console.log(data);
        context.commit('editUserInfo',data.data.data)
      })
    },
    postMes(context){
      let pames = Object.assign(context.state.mesInfos,{accesstoken:context.state.accessToken});
      console.log(pames);
      let {rootUrl,topics} = config;
      return axios.post(rootUrl+topics,pames)
    },
    postDis(context,cmes){
      let {rootUrl,topic} = config;
      return axios.post(rootUrl+topic+'/5a72d25bafa0a121784a91e8/replies',{
        accesstoken:"41b6db80-c8cf-4d77-b525-676aae89761f",
        content:cmes
      }).then(data=>{
        console.log(data);
      })
    }
  }


});
