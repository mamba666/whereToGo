<template>
    <div class="container" @click="handleGalleryClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="item of swiperList" :key="item.id">
                    <img class="img" :src="item.imgUrl">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name:"commonGallery",
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
                centeredSlides: true,
                observeParents:true,
                observer:true
            },
            swiperList:[
                {
                    id:0,
                    imgUrl:"https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&pid=hp&w=3840&h=2160&rs=1&c=4&r=0"
                },
                {
                    id:1,
                    imgUrl:"https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&pid=hp&w=3840&h=2160&rs=1&c=4&r=0"
                },
            ]
        }
    },
    methods:{
        handleGalleryClick(){
            this.$emit("close")
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container
        display flex
        flex-flow column nowrap
        justify-content center
        position fixed
        left 0
        top 0
        bottom 0
        right 0
        background-color black
        z-index 99
        .wrapper
            overflow hidden
            height 0
            padding-bottom 56%
            background-color white
            .img
                width 100%
</style>