input.onButtonPressed(Button.A, function () {
    start = 1
    radio.setGroup(208)
    radio.sendNumber(70)
    while (start == 1) {
        let checkpoint_gehaald = 0
        if (checkpoint_gehaald == 1) {
            basic.showNumber(timer)
        }
        basic.pause(50)
        timer += 0.05
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(timer)
})
input.onButtonPressed(Button.B, function () {
    start = 0
})
let timer = 0
let start = 0
start = 0
radio.setTransmitPower(7)
radio.setGroup(25)
