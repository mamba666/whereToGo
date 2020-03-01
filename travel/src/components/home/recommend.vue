<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <router-link tag="li" class="item" v-for="item of recommendList" :key="item.id" :to="'/detail/'+item.id">
                <img :src="item.imgUrl">
                <div class="info">
                    <p class="info-title">{{item.title}}</p>
                    <p class="info-desc">{{item.desc}}</p>
                    <button class="btn">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"HomeRecommend",
    props:{
        recommendList:Array
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/mixins.stylus"
    .title
        margin-top .2rem
        line-height .8rem
        background #eee
        text-indent .2rem
    .item
        display flex
        flex-flow row nowrap
        // height 2rem
        margin-top .1rem
        img 
            width 3.48rem
            height 2.14rem
            border-radius 5%
        .info
            flex 1
            display flex
            flex-flow column nowrap
            padding .1rem
            min-width 0
            .info-title
                line-height .54rem
                font-size .32rem
                font-weight 450
                color #000
            .info-desc
                margin-top .2rem
                ellipsis()
            .btn
                background #ff9300
                border-radius .06rem
                color #fff
                width 2rem
                margin-top .5rem
</style>