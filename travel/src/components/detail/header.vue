<template>
    <div class="back">
        <svg class="icon" aria-hidden="true" @click="handleBackHome">
            <use xlink:href="#iconfanhui1"></use>
        </svg>
    </div>
</template>

<script>
export default {
    name:"DetailHeader",
    methods:{
        handleBackHome(){
            this.$router.push("/")
        }
    }
}
</script>

<style lang="stylus" scoped>
    .back
        position fixed
        top 0
        line-height .6rem
        padding .3rem 0 0 .3rem 
        .icon
            font-size .5rem
</style>