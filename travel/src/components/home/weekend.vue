<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
        <li
            class="item border-bottom"
            v-for="item of weekendList"
            :key="item.id"
        >
            <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl" />
            </div>
            <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            </div>
        </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    data(){
        return {
            weekendList:[
                {
                    id:0,
                    imgUrl:"//imgs.qunarzz.com/p/tts7/1703/5c/7a23eb2a744cce02.jpg_r_480x320x90_36341f62.jpg",
                    title:"武汉-迪拜 6天跟团游",
                    desc:"林肯加长豪车游迪拜7日|冲沙|棕榈岛列车观光|五星酒店|水上的士|帆船酒店"
                },{
                    id:1,
                    imgUrl:"//imgs.qunarzz.com/vs_ceph_vs_tts/2fda6874-f24f-4d57-ad4c-a7957cc50576.jpg_r_480x320x90_7ce3c4ad.jpg",
                    title:"武汉-新加坡 6天跟团游",
                    desc:"春节抢购一价全含新加坡马来西亚6/7日游云顶/圣淘沙/吉隆坡升级一晚5星酒店"
                },{
                    id:2,
                    imgUrl:"//imgs.qunarzz.com/p/tts2/1811/2e/d7c7b4b78f58b002.jpg_r_480x320x90_cfd83461.jpg",
                    title:"武汉-泰国 6天跟团游",
                    desc:"泰国曼谷+芭堤雅6天5晚跟团游·真0自费·宿3晚钻五·泰按摩·赠888大礼包"
                },
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.stylus'
.title
    line-height .8rem
    background #eee
    text-indent .2rem
.item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.09%
    margin .1rem
    border-radius .1rem
    .item-img
        width 100%
.item-info
    padding .1rem
    .item-title
        line-height .54rem
        font-size .32rem
    ellipsis()
    .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
</style>