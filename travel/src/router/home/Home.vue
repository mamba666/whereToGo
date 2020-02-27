<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
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
    methods:{
        getHomeInfo(){
            //首先 访问8080， axios去请求这么一个路径  
            //接下来，这个路径会到 vue.config.js中
            axios.get("/api/index.json").then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            //这里可以在控制台中打印
            console.log(res)
        }
    },
    mounted(){
        this.getHomeInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>