<template>
    <div>
        <div class="list" v-for="item of list" :key="item.id">
            <div class="title">
                <span class="icon"></span>
                {{item.title}}
            </div>
            <!-- //如果有children这个选项就显示 -->
            <div v-if="item.children" class="children">
                <list :list="item.children"></list>
            </div>
            <div v-if="item.children" class="children">
                <list :list="item.children"></list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"list",
    props:{
        list:Array
    }
}
</script>

<style lang="stylus" scoped>
    .title
        line-height .8rem
        font-size .32rem
        padding 0 .2rem
        border-bottom .02rem solid #eee
    .children
        padding 0 0 0 .3rem
</style>