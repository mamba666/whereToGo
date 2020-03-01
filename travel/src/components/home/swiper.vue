<template>
    <div class="wrapper" v-if='swiperList && swiperList.length > 0'>
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:"HomeSwiper",
    props:{
        swiperList:Array
    },
    data() {
        return {
            swiperOption: {
                autoplay:true,
                speed:1500,
                loop:true,
                pagination:{
                    el:".swiper-pagination"
                },
                effect : 'coverflow',
                centeredSlides: true
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background:white
    .wrapper
        overflow hidden
        padding-bottom 66.67%
        width 100%
        height 0
        img
            width 100%
</style>