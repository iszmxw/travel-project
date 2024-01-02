<template>
  <div>
    <van-tabs v-model:active="active">
      <van-tab title="现代简约"><div class="cont cont1">现代简约</div></van-tab>
      <van-tab title="新中式"><div class="cont cont2">新中式</div></van-tab>
      <van-tab title="轻奢"><div class="cont cont3">轻奢</div></van-tab>
      <van-tab title="美式"><div class="cont cont4">美式</div></van-tab>
      <van-tab title="欧式"><div class="cont cont5">欧式</div></van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const active = ref(0);

</script>

<style scoped lang="less">
/deep/ .van-tab__text{
  font-size: 32px;
  padding: 32px 0 28px 0;
}
.cont{
  width: 620px;
  height: 360px;
  border-radius: 8px;
  margin: 40px 98px 40px 32px;
}
.cont1{
  background: #e4d3d3;
}
.cont2{
  background: #c1c498;
}
.cont3{
  background: #86c296;
}
.cont4{
  background: #7b7fc5;
}
.cont5{
  background: #bc75b1;
}
</style>
