<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@rem : 75rem;
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
#app{
  height:100%;
}
  .fl{
    float:left;
  }
  .fr{
    float:right;
  }
  .clearfix{
    *zoom:1;
  }
  .clearfix:after{
    content: "";
    display: block;
    clear:both;
  }
</style>
