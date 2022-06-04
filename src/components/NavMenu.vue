<template>
    <div>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-menu-item>
                <span slot="title">主页</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">一级菜单A</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">二级菜单A</el-menu-item>
                    <el-menu-item index="1-2">二级菜单B</el-menu-item>
                    <el-menu-item index="1-3">二级菜单C</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <span slot="title">二级菜单D</span>
                    <el-menu-item index="1-4-1">三级菜单A</el-menu-item>
                </el-submenu>
                <el-submenu index="1-5">
                    <span slot="title">二级菜单E</span>
                    <el-menu-item index="1-5-1">三级菜单A</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-submenu index="2">          
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">一级菜单B</span>
                </template>              
            </el-submenu>
            <el-submenu index="3">          
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span slot="title">一级菜单C</span>
                </template>              
            </el-submenu>
            <el-submenu index="4">          
                <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span slot="title">一级菜单D</span>
                </template>              
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    name:'NavMenu',
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 280px;
    min-height: 400px;
  }
.el-submenu .el-menu-item {
    padding: 0 15px;
}
</style>