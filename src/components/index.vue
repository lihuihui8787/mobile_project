<template>
    <view-box id="box" ref="viewBox">
      <x-header :left-options="{showBack:routeState}" :on-click-back="changeRouteState" class="head" slot="header">
        <div v-if="routeState">
          <div>内容详情</div>
        </div>
        <div v-else="!routeState">
          <h1>Vue.js</h1>
          <a href="" class="ico">登录</a>
          <!--<h1 class="logo fl">nodeJs中文社区</h1>-->
          <!--<div class="fr">-->
            <!--<a href="#">登录</a>-->
            <!--<a href="#">注册</a>-->
          <!--</div>-->
        </div>
      </x-header>
      <router-view></router-view>

      <tabbar v-show="!routeState" class="foot" slot="bottom">
        <tabbar-item :selected="v.active" style="height:100%;" :key="i" v-for="(v,i) in footList">
          <i slot="icon" :class="v.ico"></i>
          <span slot="label">{{v.info}}</span>
        </tabbar-item>
      </tabbar>
    </view-box>
</template>

<script>
  import {ViewBox, XHeader , Grid, GridItem, GroupTitle ,Tabbar, TabbarItem } from 'vux';
  import $ from 'zepto';
  import {mapState,mapMutations,mapActions} from 'vuex';

  export default {
    name:'app_index',
    data(){
      return {
        footList:[
          {
            info:'首页',
            path:'home',
            ico:'fa fa-home',
            active:true
          },
          {
            info:'主题',
            path:'home',
            ico:'fa fa-address-book',
            active:false
          },
          {
            info:'收藏',
            path:'home',
            ico:'fa fa-thumbs-up',
            active:false
          },
          {
            info:'个人中心',
            path:'home',
            ico:'fa fa-user-circle',
            active:false
          }

        ]
      }
    },
    components: {
      ViewBox,
      XHeader,
      Grid,
      GridItem,
      GroupTitle,
      Tabbar,
      TabbarItem
    },
    computed:{
      ...mapState([
        'routeState',
        'pageReplies'
      ])
    },
    methods: {
      ...mapMutations([
        'editPageMes',
        'editRouteState'
      ]),
      ...mapActions([
        'getContent'
      ]),
      changeRouteState(){
        this.editRouteState(false);
      }
    },
    updated(){
       console.log($('#vux_view_box_body'));
      $('#vux_view_box_body').scrollTop(0);
    }
  }

</script>

<style lang="less">
  @rem : 75rem;
  #box .head{
    position:absolute;
    top:0;
    height:100/@rem;
    line-height:100/@rem;
    box-sizing: border-box;
    overflow: hidden;
    z-index: 9;
    width:100%;
    padding:0 20px;
    h1{
      color:#fff;
      font-size:26/@rem;
      line-height:100/@rem;
      height:100%;
    }
    a{
      color:#fff;
      font-size:24/@rem;
      line-height:80/@rem;
    }
    .left-arrow{
      display: none;
    }
  }
  #vux_view_box_body{
    padding-top:100/@rem;
    padding-bottom:100/@rem;
  }
  .content{
    overflow: auto;
  }
  #box .foot{
    overflow: hidden;
    position:absolute;
    bottom:-1px;
    box-sizing: border-box;
    width:100%;
    height:100/@rem;
    line-height:40/@rem;
    padding-top:10/@rem;
    i{
      font-size:26/@rem;
    }
    span{
      font-size:22/@rem;
    }
    .fitem{
      font-size:24/@rem;
      color:#333;
    }
  }
  .vux-loading .weui-toast{
    width:200/@rem;
    min-height:200/@rem;
    top:500/@rem;
  }
  .weui-toast__content{
    font-size:28/@rem;
  }
</style>
