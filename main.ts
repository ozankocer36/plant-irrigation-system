let reading = 0
bluetooth.onBluetoothConnected(function () {
    bluetooth.startLEDService()
    bluetooth.startTemperatureService()
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        . . # # .
        # # # . #
        . # # # .
        # . # . #
        . . # # .
        `)
})
basic.forever(function () {
    reading = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    reading,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(input.temperature())
    }
})
