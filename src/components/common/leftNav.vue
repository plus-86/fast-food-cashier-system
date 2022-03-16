<template>
  <div class="leftNav">
    <ul>
      <li v-for="item in leftMenu" :key="item.menuId">
        <i :class="item.className"></i>
        <div>{{ item.menuName }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftMenu: [
        {
          menuId: '1',
          className: 'icon iconfont icon-goumai',
          menuName: '收银'
        },
        {
          menuId: '2',
          className: 'icon iconfont icon-dianpu',
          menuName: '店铺'
        },
        {
          menuId: '3',
          className: 'icon iconfont icon-hanbao',
          menuName: '商品'
        },
        {
          menuId: '4',
          className: 'icon iconfont icon-huiyuanqia',
          menuName: '会员'
        },
        {
          menuId: '5',
          className: 'icon iconfont icon-xiugaioryijian',
          menuName: '统计'
        },
        {
          menuId: '6',
          className: 'icon iconfont icon-gongnengjianyi',
          menuName: '设置'
        }
      ]
    }
  }
}
</script>

<style>
/* 公用组件，每个页面的样式都一样的，就不加scoped了 */
.leftNav {
  color: #ffffff;
  font-size: 10px;
  height: 100%;
  background-color: #1d8ce0;
  width: 5%;
  float: left; /*这里用浮动布局*/
}
.iconfont {
  font-size: 24px; /* 图标大小 */
}
.leftNav ul {
  /* 清除默认样式 */
  padding: 0;
  margin: 0;
}
.leftNav li {
  list-style: none; /* 无序列表ul的默认的"点点"去掉 */
  text-align: center;
  border-bottom: 1px solid #e9e9e9;
  padding: 10px;
}
</style>
