<template>
  <div>
    <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
      </div>
      <router-link to="/city">
        <div class="header-right">
          {{this.city}}
          <span class="iconfont arrow-icon">&#xe6aa;</span>
        </div>
      </router-link>
    </div>

  </div>
</template>

<script>
  import { mapState} from 'vuex'
      export default {
        name: "HomeHeader",
        computed: {
          ...mapState(['city']), //把Vuex里面的数据隐射到组件computed的
                                //这个计算属性里，把city这个公用数据隐射到city这个计算属性里
        },
    }
</script>

<style scoped lang="stylus">  //scoped 表示支队当前组件有影响，lang表示使用的是什么样式
//stylus样式 方法如下部分
   /*1rem = html font-size = 50px*/
   @import '~@/assets/styles/varibles.styl'  //样式里面引入样式import前需要加@
   .header
     margin-top:20px;
     display:flex
     line-height: $headerHeight  //.86rem = 43px
     background:$bgColor
     color:#fff
     .header-left
       width: .64rem
       float: left
       .back-icon
           text-align:center;
           font-size:.4rem;
     .header-input
       flex :1
       height:.64rem;
       background:#fff;
       border-radius:.1rem;
       margin-top:.12rem;
       line-height:.64rem;
       margin-left:.2rem;
       color:#ccc;
       padding-left:.2rem;
     .header-right
       min-width:1.04rem
       padding: 0.1rem
       float:right
       text-align:center
       color:#fff
       .arrow-icon
          margin-left:-.04rem
 /* .header{
    display:flex;
    line-height:.86rem;
    background:#00bcd4;
    color:#fff;
    .header-left{
      width: .64rem;
      float:left;
      .back-icon{
        text-align:center;
        font-size:.4rem;
      }
    }
    .header-input{
      padding-left:.2rem;
      flex:1;
      background:#fff;
      border-radius:.1rem;
      margin-top:.12rem;
      height:.64rem;
      line-height:.64rem;
      margin-left:.2rem;
      color:#ccc;
    }
    .header-right{
      width:1.24rem;
      float:right;
      text-align:center;
      .arrow-icon{
       margin-left:-.04rem;
      }
    }
  }*/
</style>
