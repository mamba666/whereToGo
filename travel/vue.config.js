const path = require('path');
const mockdataindex=require("./mock/index.json")
const mockdatacity=require("./mock/city.json")

function resolve(dir) {
    return path.join(__dirname, dir);
}


module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
        .set('styles',resolve('src/assets/styles'))
        // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
    },
    devServer:{
        //当Home.vue中的路径过来时，/api/index.json   因为是api开头，
        //所以这个路径被跨域到 http://localhost:8080/mock/index.json 
        //即实际上访问8080时，访问的是http://localhost:8080/mock/index.json
        //这样就拿到了mooc的数据。
        //拿到之后，就回到vue开始执行then。   
        //到此结束！！！！
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite:{
                    '^/api':'/mock'
                }
            },
            '/foo': {
            target: 'http://localhost:8080'
            }
        },
        //用来显示假数据，即如果直接访问 http://localhost:8080/api/index.json
        //就会在页面打印mock数据
        port:8080,
        before(app){
            app.get('/api/index.json',(req,res,next)=>{
                res.json(mockdataindex)
            })
            app.get('/api/city.json',(req,res,next)=>{
                res.json(mockdatacity)
            })
        }
    }
};