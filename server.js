const express = require('express')

const app = express()

app.use(express.static(__dirname + "/src/"))

const PORT = process.env.PORT || 4200

app.get("**", (req,res) => {
    res.sendFile(__dirname + "/src/index.html")
})

app.listen(PORT, () => {
    console.log(`Iniciou na porta ${PORT}`)
})