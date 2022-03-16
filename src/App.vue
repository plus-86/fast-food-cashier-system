<template>
  <div id="app">
    <leftNav></leftNav>
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import leftNav from '@/components/common/leftNav'
export default {
  name: 'app',
  components: {
    leftNav
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  float: left;
  background-color: #e9e9e9;
  height: 100%;
  width: 95%;
  /* overflow-y: scroll; overflow是对溢出内容处理样式，这里是溢出的话就隐藏掉溢出的内容 */
}
.fade-enter {
  opacity: 0; /** 插入的新元素最开始是透明的 **/
}
.fade-enter-active {
  transition: opacity 0.5s; /**然后用动画过渡慢慢显示出来**/
}
.fade-leave {
  opacity: 1; /**离开的元素开始是不透明的**/
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s; /**然后离开的时候慢慢变透明**/
}
</style>
