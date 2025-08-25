let verbinding = randint(0, 255)
radio.setGroup(verbinding)
let timer = 0
basic.pause(5000)
basic.forever(function () {
    basic.pause(100)
    timer += timer + 0.1
})
