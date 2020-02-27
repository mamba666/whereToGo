<template>
    <div class="search">
        <input class="search-input" type="search" placeholder="请输入城市或者拼音">
    </div>
</template>

<script>
export default {
    name:"CitySearch"
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.stylus"
    .search
        height .72rem
        padding 0 .1rem
        background $bgColor
        .search-input
            box-sizing border-box
            padding 0 .14rem
            line-height .62rem
            height .62rem
            text-align center
            width 100%
            border-radius .5rem
            color pink
</style>