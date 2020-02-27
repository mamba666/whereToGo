<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title">当前城市</div>
                <div class="button-list">
                    <div class="button">石首</div>
                </div>
            </div>
            <div class="area">
                <div class="title">热门城市</div>
                <div class="button-list">
                    <div class="button" v-for="itemHot of hotCities" :key="itemHot.id">{{itemHot.name}}</div>
                </div>
            </div>
            <div class="area" v-for="(itemCity,key) of cities" :key="key" :ref="key">
                <div class="title">{{key}}</div>
                <ul>
                    <li v-for="innerItem of itemCity" :key="innerItem.id">{{innerItem.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"CityList",
    props:{
        hotCities:Array,
        cities:Object,
        letter:String
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper)
    },
    watch:{
        letter(){
            if(this.letter){
                // 需要获取的dom应该是整个area，而不是愚蠢的去获取title
                // 还有一点需要注意，如果是循环的，那么ref前面得加上冒号
                // 即写成 :ref
                const element=this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
                // console.log(this.$refs) //{A:Array(),B:Array(),.....}
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .list
        overflow hidden
        position absolute
        left 0
        right 0
        top 1.68rem
        bottom 0
        .title
            line-height .44rem
            height .44rem
            background #eee
            margin .1rem 0 0 0
            color #666
            border-top .01rem solid #ccc
            border-bottom .01rem solid #ccc
            padding-left .18rem
            border-radius .2rem .2rem .2rem .2rem
        .button-list
            display flex
            flex-flow row wrap
            justify-content flex-start
            padding-left .22rem
            .button
                height .6rem
                line-height .6rem
                width 28.8%
                border .01rem solid #000
                text-align center
                border-radius .1rem
                margin .1rem
        ul
            li
                height .76rem
                line-height .76rem
                padding-left .2rem
                border-bottom .01rem solid #000
</style>