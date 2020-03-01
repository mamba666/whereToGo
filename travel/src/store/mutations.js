export default{
    changeCity(state,city){
        //这里的state就是上面的state，然后直接state.state_attr=comein_attr
        state.city=city
        //h5新增的功能  localStorage ，类似于cookie
        localStorage.city=city
    }
}