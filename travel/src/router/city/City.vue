<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>

<script>
import CityHeader from "@/components/city/header"
import CitySearch from "@/components/city/search"
import CityList from "@/components/city/list"
import CityAlphabet from "@/components/city/alphabet"
import axios from "axios"

export default {
    name:"City",
    data(){
        return {
            hotCities:[],
            cities:{},
            letter:""
        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    methods:{
        getCityInfo(){
            axios.get("/api/city.json").then(this.getCityInfoSucc)
        },
        getCityInfoSucc(res){
            console.log(res)
            res=res.data
            if(res.ret){
                const cityData=res.data
                this.hotCities=cityData.hotCities
                this.cities=cityData.cities
            }
        },
        handleLetterChange(letter){
            this.letter=letter
        }
    },
    mounted(){
        this.getCityInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>