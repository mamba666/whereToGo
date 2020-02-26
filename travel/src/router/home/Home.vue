<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
</template>

<script>
import HomeHeader from "@/components/home/header"
import HomeSwiper from "@/components/home/swiper"
import HomeIcons from "@/components/home/icons"
export default {
    name:"Home",
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons
    }
}
</script>

<style lang="stylus" scoped>

</style>