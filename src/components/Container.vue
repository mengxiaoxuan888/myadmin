<template>
  <el-container>
        <el-header>头部</el-header>
        <el-container>
            <el-Aside>左侧导航栏</el-Aside>
            <el-main>展示区</el-main>
        </el-container>
  </el-container>
</template>

<script>
export default {
    name:'Container'
}
</script>

<style>
.el-header{
  background-color: rgb(47, 245, 245);
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside{
    background-color: aquamarine;
    color: #333;
    text-align: center;
    height: 500px;
}
.el-main{
    background-color: rgb(178, 243, 243);
    color: #333;
    text-align: center;
}
</style>