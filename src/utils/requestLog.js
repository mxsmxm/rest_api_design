//自定义中间件函数，将所有请求打印到控制台

const requestLog = (req, res, next) => {
    console.log(`request made to ${req.url}`)
    next()
}

export default requestLog