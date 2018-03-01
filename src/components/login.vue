<template>
  <div id="loginbox">
    <div class="login">
      <h3 class="login-title">登录界面</h3>
      <div class="username">
        <span>
          用户名：
        </span>
        <input type="text">
      </div>
      <div class="userInfo">
        <span>
          密码：
        </span>
        <input type="text">
      </div>
      <div class="tips">
        <p>
          由于VUE.JS API接口的限定，只实现了登录功能，注册功能待完善，在此提供登录账号密码
          用户名：lihuihui8787
          密码：13111215087fei
        </p>
      </div>
    </div>
  </div>

</template>
<script>
  import $ from 'zepto';
  import {mapState,mapMutations,mapActions} from 'vuex';
  export default {
    name:'app_login',
    mounted(){
      let H = window.innerHeight + 'px';
      $('#loginbox').css('height',H);
      let t = Number((parseInt(H)-$('.login').height())/2);
      console.log(t);
      $('.login').css('top', t)
    },
    data(){
      return {
        userName:'',
        passWord:''
      }
    },
    computed:{
      ...mapState([
        'userInfo',
        'accessToken'
      ])
    },
    methods:{
      ...mapMutations([
        'editLoginState'
      ]),
      ...mapActions([
        'getUserInfo'
      ]),
      loginPath(){
        console.log(this.userInfo);

        if(this.userName==this.userInfo.userName){

          if(this.passWord==this.userInfo.userPaserWord){


            this.$cookie.set('token_id',this.accessToken,{expires:7});

            this.editLoginState(true);

            this.getUserInfo();

            this.$router.go(-1);

          }else{

            this.$message.error('密码输入错误');

          }
        }else{

          this.$message.error('账号输入错误');

        }
      },
    }
  }
</script>
<style lang="less">
  @rem: 75rem;
  #loginbox{
    background-color: skyblue;
    width:100%;
    font-size:24/@rem;
  }
  #loginbox .login{
    width:600/@rem;
    margin:0 auto;
    position:relative;
  }
  .login div{
    margin-bottom:40/@rem;
  }
  .username{
    height:80/@rem;
    line-height:80/@rem;
  }
  .login span{
    width:100/@rem;
    display: inline-block;
    text-align: right;
  }
  .login input{
    width:400/@rem;
    height:50/@rem;
    font-size:24/@rem;
    box-sizing: border-box;
    padding:10/@rem 0;
  }
  .tips p{
    line-height:50/@rem;
    font-size:26/@rem;
  }
  .login-title{
    width:100%;
    text-align: center;
    position:absolute;
    top:-200/@rem;
  }
</style>


