<template>
  <tabbar>
    <tabbar-item path="/home" active-color="blue">
      <img slot="item-icon" src="@/assets/img/tabbar/home.png" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/_home.png" alt="">
      <div slot="item-text">首页</div>
    </tabbar-item>
    <tabbar-item path="/category" active-color="blue">
      <img slot="item-icon" src="@/assets/img/tabbar/shequ.png" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/_shequ.png" alt="">
      <div slot="item-text">社区</div>
    </tabbar-item>
    <tabbar-item path="/cart" active-color="blue">
      <img slot="item-icon" src="@/assets/img/tabbar/zixun.png" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/_zixun.png" alt="">
      <div slot="item-text">咨询</div>
    </tabbar-item>
    <tabbar-item path="/profile" active-color="blue">
      <img slot="item-icon" src="@/assets/img/tabbar/user.png" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/_user.png" alt="">
      <div slot="item-text">我的</div>
    </tabbar-item>
  </tabbar>
</template>

<script>
import Tabbar from "./tabbar/Tabbar";
import TabbarItem from "./tabbar/TabbarItem";
export default {
  name: "MainTabbar",
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style scoped>

</style>
