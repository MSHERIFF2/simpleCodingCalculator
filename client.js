const btnPost = document.getElementById('calcSumButtonPost')
const btnGet = document.getElementById('calcSumButtonGet')
const result = document.getElementById('result')

const num1Element = document.getElementById('num1')
const num2Element = document.getElementById('num2')

btnPost.addEventListener('click', () => {
    calcSumBtnPost(parseInt(num1Element.value), parseInt(num2Element.value))
})
btnGet.addEventListener('click', () => {
    calcSumBtnGet(parseInt(num1Element.value), parseInt(num2Element.value))
})

const calcSumBtnGet = (num1, num2) => {
    const api = "https://simplecodingcalculator-2.onrender.com"
    fetch(`api?number1=${num1}&number2=${num2}`)
    .then(res => res.text())
    .then(data => result.innerHTML = data)
}