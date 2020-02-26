<template>
    <div class="container">
        <div class="d" v-for="item of iconsList" :key="item.id">
            <img :src="item.imgUrl">
            <p>{{item.text}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"HomeIcons",
    data(){
        return {
            iconsList:[
                {
                    id:0,
                    imgUrl:"https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png",
                    text:"民宿客栈"
                },{
                    id:1,
                    imgUrl:"https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png",
                    text:"民宿客栈"
                },{
                    id:2,
                    imgUrl:"https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png",
                    text:"民宿客栈"
                },{
                    id:3,
                    imgUrl:"https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png",
                    text:"民宿客栈"
                },{
                    id:4,
                    imgUrl:"https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png",
                    text:"民宿客栈"
                },{
                    id:5,
                    imgUrl:"https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png",
                    text:"民宿客栈"
                },{
                    id:6,
                    imgUrl:"https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png",
                    text:"民宿客栈"
                },{
                    id:7,
                    imgUrl:"https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png",
                    text:"民宿客栈"
                },
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container
        display flex
        flex-flow row wrap
        justify-content space-around
        width 100%
        height 3.75rem
        .d
            width 25%
            height 1.875rem
            // background pink
            display flex
            justify-content center
            align-items center
            flex-flow row wrap
            img
                width 80%
                height 80%
            p
                padding-bottom .375rem
</style>