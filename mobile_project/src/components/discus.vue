<template>
    <div class="mes-contol">
      <h3 class="mesTitle"><small class="tab" :class="pageData&&pageData.tab=='all'||'good'?'tab0':'tab2'">{{pageData&&pageData.tab}}</small>{{pageData&&pageData.title}}</h3>
      <div class="markdown-body" v-html="pageContent"></div>
      <flexbox id="replies" orient="vertical">
        <h3>评论专区：</h3>
        <flexbox-item class="replisbox" style="background-color: #fff;overflow:hidden;" :key="i" v-for="(v,i) in pageReplies&&pageReplies">
          <div class="loginMes clearfix">
            <div class="flex-demo fl">
              <img class="ava" v-lazy="v.author.avatar_url" alt="">
              <span>{{v.author.loginname}}</span>
            </div>
            <div class="fr">

            </div>
          </div>
          <div class="markdown-body" v-html="v.content"></div>
        </flexbox-item>
      </flexbox>
    </div>


</template>

<script>
  import { Flexbox , FlexboxItem ,LoadMore } from 'vux';
  import {mapState,mapMutations,mapActions} from 'vuex';
  export default {
    name:'app_xiangqing',
    computed:{
      ...mapState([
        'pageContent',
        'pageReplies',
        'pageData',
        'routeState'
      ])
    },
    beforeMount(){
      this.editRouteState(true);
      this.getContent(this.$route.params.id);
      console.log(this.pageReplies);

    },
    mounted(){
      console.log(this.pageReplies);
    },
    methods:{
      ...mapMutations([
        'editPageMes',
        'editRouteState'
      ]),
      ...mapActions([
        'getContent'
      ])
    },
    destroyed(){
      this.editRouteState(false);
    },
    components: {
      Flexbox ,
      FlexboxItem
    },
    mounted(){

    }
  }

</script>

<style lang="less">
  @rem : 75rem;
  .mesTitle{
    font-size:28/@rem;
    padding:40/@rem;
    box-sizing: border-box;
  }
  .markdown-body {
    font-size:24/@rem;
    padding:40/@rem;
    box-sizing: border-box;
  }
  .markdown-body img{
    width:100%;
  }
  #replies .repliesbox{
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
  #replies .loginMes{
    line-height:60/@rem;
  }
  .ava{
    height:60/@rem;
    margin-right:20/@rem;
  }
  #replies{
    font-size:24/@rem;
    box-sizing:border-box;
    padding:40/@rem;
  }
  #replies .replisbox{
    margin-bottom:40/@rem;
  }
  .markdown-body img{
    width:100%;
  }
</style>

