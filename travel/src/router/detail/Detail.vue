<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :galleryImgs="galleryImgs"></detail-banner>
        <detail-header></detail-header>
        <detail-list :categoryList="categoryList"></detail-list>
    </div>
</template>

<script>
import DetailBanner from "@/components/detail/banner"
import DetailHeader from "@/components/detail/header"
import DetailList from "@/components/detail/list"
import axios from "axios"
export default {
    name:"Detail",
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
        return {
            sightName:"",
            bannerImg:"",
            galleryImgs:[],
            categoryList:[]
        }
    },
    methods:{
        getDetailInfo(){
            axios.get("api/detail.json",{
                params:{
                    id:this.$route.params.id
                }
            }).then(this.getDetailInfoSucc)
        },
        getDetailInfoSucc(res){
            console.log(res)
            res=res.data
            if(res.ret){
                const detailData=res.data
                this.sightName=detailData.sightName
                this.bannerImg=detailData.bannerImg
                this.galleryImgs=detailData.galleryImgs
                this.categoryList=detailData.categoryList
            }
        }
    },
    mounted(){
        this.getDetailInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>