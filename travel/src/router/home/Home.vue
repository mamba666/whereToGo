<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
    </div>
</template>

<script>
import HomeHeader from "@/components/home/header"
import HomeSwiper from "@/components/home/swiper"
export default {
    name:"Home",
    components:{
        HomeHeader,
        HomeSwiper
    }
}
</script>

<style lang="stylus" scoped>

</style>