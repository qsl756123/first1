<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校姓名：{{name}}</h2>
        <h2>学校年龄：{{age}}</h2>
        <button @click="showName">点我提示学校名</button>
   </div>
</template>

<script>
    //组件交互相关的代码（数据、方法等）
    export default {
        name:'Student',
        data(){
            return{
                name:'小乔',
                address:18
            }
        }
    }
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color: orange;
    }
</style>
