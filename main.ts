radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 4) {
        basic.showString("test-text")
    }
    if (receivedNumber == 3) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . # . .
            # # # # #
            . . . . .
            `)
    }
    if (receivedNumber == 2) {
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
    }
    if (receivedNumber == 0) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (receivedNumber == 1) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(4)
})
basic.forever(function () {
	
})
