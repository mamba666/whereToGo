<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
    </div>
</template>

<script>
import DetailBanner from "@/components/detail/banner"
import DetailHeader from "@/components/detail/header"
import DetailList from "@/components/detail/list"
export default {
    name:"Detail",
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
        return {
            list:[
                {
                    id:0,
                    title:"成人票",
                    //二级菜单
                    children:[
                        {
                            title:"成人月票",
                            children:[
                                {title:"88RMB"}
                            ]
                        },
                        {
                            title:"成人年票",
                            children:[
                                {title:"188RMB"}
                            ]
                        }
                    ]
                },
                {
                    id:1,
                    title:"儿童票"
                },
                {
                    id:2,
                    title:"学生票"
                },
                {
                    id:3,
                    title:"军人票"
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>