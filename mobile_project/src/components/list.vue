<template>
  <div class="scrollbox">
    <flexbox id="mescontor" orient="vertical">
      <flexbox-item class="mesbox" style="background-color: #fff;overflow:hidden;" :key="i" v-for="(v,i) in list">
        <router-link style="display: block;color:#333;" :to="{path:'/page/'+v.id}">
          <h3 class="ava-mes">
            <small class="tab tab0" v-if="v.top">置顶</small>
            <small class="tab tab1" v-else-if="v.good">精华</small>
            <small class="tab tab2" v-else-if="v.tab=='share'">分享</small>
            <small class="tab tab3" v-else-if="v.tab=='ask'">问答</small>
            <small class="tab tab4" v-else-if="v.tab=='job'">招聘</small>
            <small class="tab tab4" v-else>测试贴</small>
            {{v.title}}
          </h3>
          <div class="loginMes clearfix">
            <div class="flex-demo fl">
              <img class="ava" v-lazy="v.author.avatar_url" alt="">
              <span>{{v.author.loginname}}</span>
            </div>
            <div class="fr">{{ countTime(v.create_at)}}</div>
          </div>
        </router-link>
      </flexbox-item>
    </flexbox>
  </div>
</template>
<script>
  import { Flexbox , FlexboxItem ,LoadMore } from 'vux';
  import {mapState , mapMutations, mapActions} from 'vuex';
  import 'dropload/dropload.js';
  export default {
    name:'app_list',
    components:{
      Flexbox,
      FlexboxItem,
      LoadMore
    },
    computed:{
      ...mapState([
        'list',
        'list_of'
      ])
    },
    methods:{
      ...mapActions([
        'getList'
      ]),
      ...mapMutations([
        'editListName'
      ]),
      countTime(t){
        let now = new Date().getTime();
        let end = new Date(t).getTime();
        let total = now - end;
        let d = Math.floor(total/(24*60*60*1000));
        let h = Math.floor(total%(24*60*60*1000)/(60*60*1000));
        let m = Math.floor(total%(60*60*1000)/(60*1000));

        let data = d?d+'天前':h?h+'小时前':m?m+'分钟前':'刚刚';

        return data;
      }
    },
    beforeMount(){
      this.editListName(this.$route.name);
      this.getList().then(()=>{
        setTimeout( ()=> {
          this.$vux.loading.hide();
        },400);
      });
      console.log(this.list);
    },
    mounted(){
      console.log();

    }
  }
</script>
<style lang="less">
  @rem : 75rem;
  #mescontor{
    background-color: #f0fff4;
  }
  #mescontor .mesbox{
    background-color: #fff;
    padding:30/@rem;
    box-sizing: border-box;
    font-size:24/@rem;
    line-height:30/@rem;
    overflow: hidden;
    margin-bottom: 40/@rem;
    color:#333;
  }
  .ava-mes{
    height:60/@rem;
    line-height:40/@rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom:40/@rem;
  }
  #mescontor .loginMes{
    line-height:60/@rem;
  }
  .tab {
    margin-right: 20/@rem;
    display: inline-block;
    text-align: center;
  }
  .tab0,.tab1{
    background: #80bd01;
    padding: 4/@rem 8/@rem;
    color: #fff;
    font-size: 24/@rem;
    border-radius: 6/@rem;
  };
  .tab2,.tab3,.tab4{
    background: #e5e5e5;
    padding: 4/@rem 8/@rem;
    color: #999;
    font-size: 24/@rem;
    border-radius: 6/@rem;
  }
  .ava{
    height:60/@rem;
    margin-right:20/@rem;
  }
</style>
