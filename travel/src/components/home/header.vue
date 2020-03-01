<template>
    <div class="header">
        <div class="left">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconfanhui1"></use>
            </svg>
        </div>
        <div class="input">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconsousuo1"></use>
            </svg>
            输入城市/景点/主题
        </div>
        <router-link to="/city">
            <div class="right">
            {{this.city}}
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconiconzhengli-"></use>
            </svg>
            </div>
        </router-link>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    name:"HomeHeader",
    computed:{
        ...mapState(['city'])
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.stylus"
    .header
        display flex
        height .86rem
        background $bgColor
        line-height .86rem
        color #fff
        text-align center
        .left
            width .64rem
            .icon
                font-size .3rem
        .input
            flex 1
            background #fff
            border-radius .1rem
            box-sizing border-box
            margin .1rem
            height .66rem
            line-height .66rem
            text-align center
            color #ccc
            .icon
                font-size .3rem
        .right
            // 如果这里加了宽度，那么就会定死
            // 导致字数多的时候会撑不开将图标给弄没
            // width 1.24rem
            color #fff
            .icon
                font-size .4rem
</style>