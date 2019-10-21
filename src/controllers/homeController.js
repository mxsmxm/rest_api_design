const homeControllers = {
    handIndex(req, res) {
        res.send("hello,wordld!from controllers!!!")
    },
    singnUp(req, res) {
        console.log(req.body)
        res.json(req.body)
    },
    sendRequestParam(req, res) {
        const id = req.params.id
        console.log(id)
        res.send(`the params is ${id}`)
    }
}


export default homeControllers