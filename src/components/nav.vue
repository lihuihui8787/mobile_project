<template>
  <nav id="nav">
    <sticky :offset="h" :check-sticky-support="false" scroll-box="vux_view_box_body">
      <div style="height:100%;" class="fix-nav">
        <div style="height:100%;">
          <tab class="tabBox" style="height:100%;" :line-width="2">
            <tab-item @on-item-click="home" class="litem" :selected="this.$route.name=='all'">全部</tab-item>
            <tab-item @on-item-click="good" class="litem" :selected="this.$route.name=='good'">精华</tab-item>
            <tab-item @on-item-click="share" class="litem" :selected="this.$route.name=='share'">分享</tab-item>
            <tab-item @on-item-click="ask" class="litem" :selected="this.$route.name=='ask'">问答</tab-item>
            <tab-item @on-item-click="job" class="litem" :selected="this.$route.name=='job'">招聘</tab-item>
            <tab-item @on-item-click="dev" class="litem" :selected="this.$route.name=='dev'">测试</tab-item>
          </tab>
        </div>
      </div>
    </sticky>
  </nav>
</template>
<script>
  import { Tab, TabItem, Sticky } from 'vux';
  export default {
    name:'app_nav',
    data(){
      return {
        h:''
      }
    },
    mounted(){
      this.h = $('.head').height();
    },
    components:{
      Sticky,
      Tab,
      TabItem
    },
    methods:{
      home(){

        if(this.$route.name=='all') return;
        this.$vux.loading.show({
          text:'Loading'

        });
        this.$router.push({path:'/all'})
      },
      good(){
        if(this.$route.name=='good') return;
        this.$vux.loading.show({
          text:'Loading'
        });
        this.$router.push({path:'/good'})
      },
      ask(){
        if(this.$route.name=='ask') return;
        this.$vux.loading.show({
          text:'Loading'
        });

        this.$router.push({path:'/ask'})
      },
      job(){
        if(this.$route.name=='job') return;
        this.$vux.loading.show({
          text:'Loading'
        });

        this.$router.push({path:'/job'})
      },
      share(){
        if(this.$route.name=='share') return;
        this.$vux.loading.show({
          text:'Loading'
        });
        this.$router.push({path:'/share'})
      },
      dev(){
        if(this.$route.name=='dev') return;
        this.$vux.loading.show({
          text:'Loading'
        });
        this.$router.push({path:'/dev'})
      },
    }
  }
</script>

<style lang="less">
  @rem : 75rem;
  #nav{
    height:100/@rem;
    margin-bottom:20/@rem;
  }
  #nav .litem{
    font-size:28/@rem;
    line-height:100/@rem;
  }
</style>
