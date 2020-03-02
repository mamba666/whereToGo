<template>
    <div>
        
        <div class="banner" @click="handleGalleryShow">
            <img src="https://cn.bing.com/th?id=OHR.FlowingClouds_ZH-CN0721854476_UHD.jpg&pid=hp&w=3840&h=2160&rs=1&c=4&r=0">
            <div class="banner-info">
                <div class="title">石首桃花山(AAAAA景区)</div>
                <div class="num">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icontupian"></use>
                    </svg>
                    39
                </div>
            </div>
        </div>
        <common-gallery @close="handleGalleryClose" v-show="showGallery"></common-gallery>
    </div>
</template>

<script>
import commonGallery from "common/gallery/gallery"
export default {
    name:"DetailBanner",
    components:{
        commonGallery
    },
    data(){
        return {
            showGallery:false
        }
    },
    methods:{
        handleGalleryShow(){
            this.showGallery=true
        },
        handleGalleryClose(){
            this.showGallery=false
        }
    }
}
</script>

<style lang="stylus">
    .banner
        overflow hidden
        height 0
        padding-bottom 56.5%
        position relative
        img
            width 100%
        .banner-info
            position absolute
            bottom 0
            line-height .8rem
            display flex
            flex-flow row nowrap
            color white
            justify-content space-between
            width 100%
            .title
                margin-left .2rem
                font-size .28rem
                background-image: 
                -webkit-gradient( linear, left top, right top, color-stop(0, #f22), 
                color-stop(0.15, #f2f), 
                color-stop(0.3, #22f), 
                color-stop(0.45, #2ff), 
                color-stop(0.6, #2f2),
                color-stop(0.75, #2f2), 
                color-stop(0.9, #ff2), 
                color-stop(1, #f22) );
                color transparent
                -webkit-background-clip text
            .num
                margin-right .2rem
                font-size .28rem
            .icon
                font-size .38rem
</style>