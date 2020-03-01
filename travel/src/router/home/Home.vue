<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconsList="iconsList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from "@/components/home/header"
import HomeSwiper from "@/components/home/swiper"
import HomeIcons from "@/components/home/icons"
import HomeRecommend from "@/components/home/recommend"
import HomeWeekend from "@/components/home/weekend"
import axios from "axios"

export default {
    name:"Home",
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data(){
        //要格外注意这里的类型，不能填错
        return {
            // 在使用vuex后，city需要又前端获取，而不是后端axios
            // city:"",
            swiperList:[],
            iconsList:[],
            recommendList:[],
            weekendList:[],
        }
    },
    methods:{
        getHomeInfo(){
            //首先 访问8080， axios去请求这么一个路径  
            //接下来，这个路径会到 vue.config.js中
            axios.get("/api/index.json").then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            //这里可以在控制台中打印
            console.log(res)
            // 将mooc数据里的data赋值给res
            res=res.data
            //然后判断一下，获取的res是否正确,因为ret为true
            if(res.ret){
                const data=res.data
                this.swiperList=data.swiperList
                this.iconsList=data.iconsList
                this.recommendList=data.recommendList
                this.weekendList=data.weekendList
            }
        }
    },
    mounted(){
        this.getHomeInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>