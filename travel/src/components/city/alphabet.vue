<template>
    <div>
        <ul class="list">
            <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"CityAlphabet",
    props:{
        cities:Object
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.stylus"
    .list
        display flex
        flex-flow column nowrap
        justify-content center
        align-items center
        position absolute
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        .item
            font-size .28rem
            margin .05rem 0
            color $bgColor
</style>