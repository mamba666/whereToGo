<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item" v-for="item of recommendList" :key="item.id">
                <img :src="item.imgUrl">
                <div class="info">
                    <p class="info-title">{{item.title}}</p>
                    <p class="info-desc">{{item.desc}}</p>
                    <button class="btn">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"HomeRecommend",
    data(){
        return {
            recommendList:[
                {
                    id:0,
                    imgUrl:"//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/6ff48e0e00432f823bf593deec6d3397.jpg",
                    title:"R.I.P KOBE",
                    desc:"富强、民主、文明、和谐、自由、平等、公正、法治、爱国、敬业、诚信、友善",
                },{
                    id:1,
                    imgUrl:"//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/729fced755d522ccfc280ef155f45518.jpg",
                    title:"R.I.P KOBE",
                    desc:"富强、民主、文明、和谐、自由、平等、公正、法治、爱国、敬业、诚信、友善",
                },{
                    id:2,
                    imgUrl:"//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/e86b37fef48851353d6f5ae0090cc974.jpg",
                    title:"R.I.P KOBE",
                    desc:"富强、民主、文明、和谐、自由、平等、公正、法治、爱国、敬业、诚信、友善",
                },{
                    id:3,
                    imgUrl:"//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/24d074328b5a26845ebb92be20b38754.jpg",
                    title:"R.I.P KOBE",
                    desc:"富强、民主、文明、和谐、自由、平等、公正、法治、爱国、敬业、诚信、友善",
                },
            ]
        }
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