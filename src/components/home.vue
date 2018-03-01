<template>
  <div>
    <app_banner>

    </app_banner>
    <app_nav>

    </app_nav>
    <router-view  class="app-router-view">

    </router-view>

  </div>
</template>
<script>
  import app_banner from './banner';

  import app_nav from './nav';

  export default {
    name:'app-home',
    components:{
      app_nav,
      app_banner,

    }
  }

</script>
<style>

</style>
