<template>
    <div>
        <router-link  to="/test">Test</router-link> | 
        <router-link  to="/container">Container</router-link> | 
        <!-- 组件的显示位置 -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:"App"
    }
</script>

<style>

</style>

