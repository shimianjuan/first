<template>
    <div>
      <div class="banner" @click="handleBannerClick">
        <img class="banner-img" :src="bannerImg"/>
        <div class="banner-info">
          <div class="banner-tittle">{{this.sightName}}</div>
          <div class="banner-number">
            <span class="iconfont banner-icon">&#xe60f;</span>
            {{this.bannerImgs.length }}
          </div>
        </div>
      </div>
      <fade-animation>
        <common-gallary
          :imgs="bannerImgs"
          v-show="showGallary"
          @close="handleGallaryClose"></common-gallary>
      </fade-animation>

    </div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'
import FadeAnimation from '@/common/fade/FadeAnimation'
    export default {
        name: "DetailBanner",
        props:{
        sightName: String,
        bannerImg:  String,
        bannerImgs: Array,
      },
        data() {
          return{
            showGallary: false,
            /*imgs:[
              'http://img1.qunarzz.com/sight/p0/1904/a2/a23ae48aac0c0ab2a3.water.jpg_350x240_99142bd2.jpg',
              'http://img1.qunarzz.com/sight/p0/1904/6d/6dd775aa7d985158a3.water.jpg_350x240_f70848e4.jpg',
              'http://img1.qunarzz.com/sight/p0/1904/c0/c0188c602ec49751a3.water.jpg_350x240_4d54cb62.jpg'
            ]*/
          }
       },
      methods:{
        handleBannerClick () {
          this.showGallary = true
        },
        handleGallaryClose(){
          this.showGallary =false
        }
      },
        components:{
          CommonGallary,
          FadeAnimation,
        }
    }
</script>

<style scoped lang="stylus">
  .banner
    position: relative;
    overflow:hiddden
    height: 0
    padding-bottom: 55%
    .banner-img
       width: 100%;
    .banner-info
       display: flex
       position: absolute
       left: 0
       right: 0
       bottom: 0
       line-height: .6rem
       color:#fff
       background-image: linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.8))
       .banner-tittle
          flex: 1
          font-size: .32rem
          padding: 0 .2rem
       .banner-number
          padding: 0 .4rem
          line-height: .4rem
          margin-top: .14rem
          height: .32rem
          border-radius: .2rem
          background: rgba(0,0,0,.8)
          font-size: .24rem
          .banner-icon
            font-size: .24rem

</style>
