function testOFF () {
    pins.digitalWritePin(DigitalPin.P1, 1)
}
input.onButtonPressed(Button.A, function () {
    testON()
})
input.onButtonPressed(Button.B, function () {
    testOFF()
})
function testON () {
    pins.digitalWritePin(DigitalPin.P1, 0)
}
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
