<template>
    <div class="container">
        <div class="d" v-for="item of iconsList" :key="item.id">
            <img :src="item.imgUrl">
            <p>{{item.text}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"HomeIcons",
    props:{
        iconsList:Array
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/mixins.stylus"
    .container
        display flex
        flex-flow row wrap
        justify-content space-around
        width 100%
        height 3.75rem
        .d
            width 25%
            height 1.875rem
            // background pink
            display flex
            justify-content center
            align-items center
            flex-flow row wrap
            img
                width 80%
                height 80%
            p
                padding 0 .1rem .375rem .1rem
                ellipsis()
</style>