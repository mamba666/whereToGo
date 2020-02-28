<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="search" placeholder="请输入城市或者拼音">
        </div>
        <div ref="content" class="search-content" v-show="keyword">
            <ul>
                <li class="search-item" v-for="item of list" :key="item.id">{{item.name}}</li>
                <li class="tips" v-if="!list.length">没有找到您的城市~。~</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"CitySearch",
    props:{
        cities:Object
    },
    data(){
        return{
            keyword:"",
            list:[]
        }
    },
    watch:{
        keyword(){
            //当搜索框清空后，让其显示的东西也一起清空
            if(!this.keyword){
                this.list=[]
                return
            }
            const result=[]
            for(let item in this.cities){
                //item为cities的属性名
                //所以这里的意思是对cities的属性值在做一边循环
                this.cities[item].forEach((val)=>{
                    //判断cities的属性值的spell是否包含这个search框所输入的东西
                    //大于-1的意思是假如可以搜索到这个关键字
                    if(val.spell.indexOf(this.keyword)>-1||val.name.indexOf(this.keyword)>-1){
                        result.push(val)
                    }
                })
            }
            this.list=result
        }
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.content)
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.stylus"
    .search
        height .72rem
        padding 0 .1rem
        background $bgColor
        margin 0 0 .1rem 0
        border-radius 0 0 .2rem .2rem
        .search-input
            box-sizing border-box
            padding 0 .14rem
            line-height .62rem
            height .62rem
            text-align center
            width 100%
            border-radius .5rem
            color black
    .search-content
        overflow hidden
        z-index 1
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        background-color #eee
        .search-item
            line-height .62rem
            padding-left .2rem
            background-color #fff
            border-bottom .01rem solid #eee
            color #666
        .tips
            line-height .88rem
            background-color #fff
            text-align center
</style>