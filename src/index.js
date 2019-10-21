import express from 'express'
//导入controlls
import homeControllers from './controllers/homeController'

//导入自定义中间件
import requestLog from './utils/requestLog'

const app = express()

app.set("PORT", process.env.PORT || 3001)

//注册自定义中间件
app.use(requestLog)

//解析 req.body 中间件
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

app.get("/product/:id", homeControllers.sendRequestParam)
app.get("/", homeControllers.handIndex)
app.post("/", homeControllers.singnUp)


app.listen(app.get("PORT"), () => {
    console.log(`Server is running on port:${app.get("PORT")}`)
})