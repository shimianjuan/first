<template>
  <div id="app">
   <keep-alive exclude="Detail"><!--除了Detail这个页面都被缓存-->
     <router-view/><!--当前路由地址显示的内容-->
   </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
