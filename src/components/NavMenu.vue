<template>
    <div>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu default-active="zhuye" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-menu-item index="zhuye">
                <span slot="title">主页</span>
            </el-menu-item>
            <el-submenu :index="item.id" v-for="(item,index) in items" :key="index">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">{{item.name}}</span>
                </template>
                <el-submenu :index="sub.id" v-for="(sub,index) in item.subitem" :key="index">
                    <span slot="title">{{sub.name}}</span>
                    <el-menu-item :index="sun.id" v-for="(sun,index) in sub.subitem" :key="index">
                        {{sun.name}}
                    </el-menu-item>
                </el-submenu>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    name:'NavMenu',
    data() {
      return {
        isCollapse: false,
        items:[
            {
                name:"一级菜单A",
                id:"1",
                subitem:[
                    {
                        name:"二级菜单A",
                        id:"1-1",
                        subitem:[
                            {
                                name:"三级菜单A",
                                id:"1-1-1"
                            },
                            {
                                name:"三级菜单B",
                                id:"1-1-2"
                            }
                        ]
                    },
                    {
                        name:"二级菜单B",
                        id:"1-2",
                        subitem:[
                            {
                                name:"三级菜单A",
                                id:"1-2-1"
                            },
                            {
                                name:"三级菜单B",
                                id:"1-2-2"
                            }
                        ]
                    }
                ]
            },
            {
                name:"一级菜单B",
                id:"2",
                subitem:[
                    {
                        name:"二级菜单A",
                        id:"2-1",
                        subitem:[
                            {
                                name:"三级菜单A",
                                id:"2-1-1"
                            },
                            {
                                name:"三级菜单B",
                                id:"2-1-2"
                            }
                        ]
                    }
                ]
            },
            {
                name:"一级菜单C",
                id:"3",
                subitem:[
                    {
                        name:"二级菜单A",
                        id:"3-1",
                        subitem:[
                            {
                                name:"三级菜单A",
                                id:"3-1-1"
                            },
                            {
                                name:"三级菜单B",
                                id:"3-1-2"
                            }
                        ]
                    }
                ]
            },
        ]
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