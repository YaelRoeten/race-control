input.onButtonPressed(Button.A, function () {
    checkpoint_gehaald = 1
    basic.pause(500)
    checkpoint_gehaald = 0
})
let timer = 0
let checkpoint_gehaald = 0
let verbinding = randint(0, 255)
radio.setGroup(verbinding)
basic.pause(5000)
basic.forever(function () {
    if (checkpoint_gehaald == 1) {
        basic.showNumber(timer)
    }
    basic.pause(100)
    timer += 0.1
})
