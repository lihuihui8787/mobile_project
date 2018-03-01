<template>
  <div>
    <app_list></app_list>
  </div>


</template>
<script>
  import app_nav from './nav';
  import app_list from './list';
  export default {
    name:'app_all',
    components:{
      app_nav,
      app_list
    }
  };

</script>
