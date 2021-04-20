import express from 'express'

const app = express()

app.use("/", (req, res) => {
    return res.send("hello world")
})

app.listen(3333, () => console.log("server is running on port 3333"))