input.onButtonPressed(Button.A, function () {
    secret_number = 40 * 36
    radio.sendValue("value", secret_number)
})
radio.onReceivedValue(function (name, value) {
    basic.showNumber(value)
})
let secret_number = 0
radio.setGroup(40)
