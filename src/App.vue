<template>
  <van-button type="success" size="large" @click="handleClick">ok</van-button>
  <!-- 可以使用 CellGroup 作为容器 -->
  <van-cell-group inset>
    <van-field v-model="username" label="文本" placeholder="请输入用户名" />
  </van-cell-group>
</template>

<script setup>
import { ref,reactive} from "vue"
const handleClick = () => {
  console.log("我被点击了");
}

const username = ref("");
</script>

<style scoped></style>
