<template>
    <div class="wrapper">
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
            },
            swiperList:[
                {
                    id:0,
                    imgUrl:"https://z1.muscache.cn/im/pictures/8e737c5e-4fd8-4ad7-92b2-490a8e46c4ec.jpg?aki_policy=large"
                },{
                    id:1,
                    imgUrl:"https://z1.muscache.cn/im/pictures/bcb57d96-a776-4084-a69e-37a5c2ed6762.jpg?aki_policy=large"
                },{
                    id:2,
                    imgUrl:"https://z1.muscache.cn/im/pictures/c3ee793c-eeec-4a75-99ef-80984fedcfda.jpg?aki_policy=large"
                }
            ]
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