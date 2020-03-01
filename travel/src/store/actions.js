export default{
    changeCity(ctx,city){
        //调用mutations的changecity方法
        ctx.commit("changeCity",city)
    }
}