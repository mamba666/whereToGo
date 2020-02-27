<template>
    <ul class="list">
        <li class="item">A</li>
        <li class="item">B</li>
        <li class="item">C</li>
        <li class="item">D</li>
        <li class="item">E</li>
        <li class="item">F</li>
        <li class="item">G</li>
        <li class="item">H</li>
        <li class="item">I</li>
        <li class="item">J</li>
        <li class="item">A</li>
        <li class="item">B</li>
        <li class="item">C</li>
        <li class="item">D</li>
        <li class="item">E</li>
        <li class="item">F</li>
        <li class="item">G</li>
        <li class="item">H</li>
        <li class="item">I</li>
        <li class="item">J</li>
    </ul>
</template>

<script>
export default {
    name:"CityAlphabet"
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