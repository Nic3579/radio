input.onButtonPressed(Button.A, function () {
    encode = randint(2, 10)
    secret_number = 40 * encode
    radio.sendValue("value", secret_number)
    radio.sendValue("code", encode)
})
radio.onReceivedValue(function (name, value) {
    basic.showNumber(value)
})
let secret_number = 0
let encode = 0
radio.setGroup(40)
