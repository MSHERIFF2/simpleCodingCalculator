const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    let num1 = parseInt(req.query.number1)
    let num12 = parseInt(req.query.number2)

    let sum = num1 + num12;

    res.send("The sum of numbers is " + sum)
  res.send("Waiting for input from client")

})

app.post("/", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const sum = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is ${sum}`)
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})