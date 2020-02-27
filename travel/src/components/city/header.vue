<template>
    <div class="header">
        城市选择
        <div class="iconBox">
            <router-link to="/">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconfanhui1"></use>
                </svg>
            </router-link>
        </div>
        
    </div>
</template>

<script>
export default {
    name:"CityHeader"
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.stylus"
    .header
        position relative
        height 0.86rem
        line-height .86rem
        overflow hidden
        text-align center
        color #fff
        background $bgColor
        font-size .32rem
        .iconBox
            height .86rem
            width .86rem
            display inline
            position absolute
            top 0
            left 0
            margin 0 0 0 .3rem
            .icon 
                position absolute
                top 0
                left 0
                bottom 0
                right 0
                margin auto 0
                width .4rem
                height .4rem
</style>