<template>
    <div>
        <ul class="list">
            <li class="item" v-for="item of letters" :key="item" :ref="item" @click="handleLetterClick" @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"CityAlphabet",
    props:{
        cities:Object
    },
    computed:{
        letters(){
            const letters=[]
            // for...in 语句用于对数组或者对象的属性进行循环操作。
            for(let item in this.cities){
                letters.push(item)
            }
            return letters
            // ["A","B",.......]
        }
    },
    data(){
        return {
            startY:0
        }
    },
    methods:{
        handleLetterClick(e){
            this.$emit("change",e.target.innerText)
        },
        handleTouchStart(){
            this.handleTouchMove
        },
        handleTouchMove(e){
            //计算A与顶部的距离
            const startY=this.$refs["A"][0].offsetTop
            //计算当前滑动手指所在的地方与顶部的距离
            //79是header和search的总高度
            //所以touchY就是距离顶部的高度
            const touchY=e.touches[0].clientY-79
            // index为字母下标
            const index=Math.floor((touchY-startY)/19)
            this.$emit("change",this.letters[index])
        },
        handleTouchEnd(){
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.stylus"
    .list
        display flex
        flex-flow column nowrap
        justify-content center
        align-items center
        position absolute
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        .item
            font-size .28rem
            margin .05rem 0
            color $bgColor
</style>