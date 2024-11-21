const randomColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const hexaNumber = "#" + randomNumber.toString(16)
    console.log(randomNumber)
    console.log(hexaNumber)
    document.body.style.backgroundColor = hexaNumber
    document.getElementById('color-code').innerHTML = hexaNumber
}
document.getElementById('btn').addEventListener(
    'click',
    randomColor
)

// for initial reload
randomColor()