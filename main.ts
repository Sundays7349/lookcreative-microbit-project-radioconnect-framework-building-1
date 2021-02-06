radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("请在这里放下您的程序!")
})
input.onButtonPressed(Button.A, function () {
    if (isInitialization == 0) {
        Group += -1
    } else {
        basic.showString("请在这里放下您的程序!")
    }
})
/**
 * 在每个按钮被按下的的块的否则区域，您都可以继续写下您的程序内容
 */
input.onButtonPressed(Button.AB, function () {
    if (isInitialization == 0) {
        isInitialization += 1
        basic.showLeds(`
            . . . . .
            . . . . #
            # . . # .
            # . # . .
            . # . . .
            `)
    } else {
        basic.showString("请在这里放下您的程序!")
    }
})
input.onButtonPressed(Button.B, function () {
    if (isInitialization == 0) {
        Group += 1
    } else {
        basic.showString("请在这里放下您的程序!")
    }
})
/**
 * 这里的123是来提前激活在线MakeCode的第二个机器，可提早操作，在实际应用可以删除
 */
let isInitialization = 0
let Group = 0
isInitialization = 0
basic.showLeds(`
    . # # # .
    # . . . #
    . # # # .
    # . . . #
    . . # . .
    `)
radio.sendString("123")
basic.forever(function () {
    if (Group == -1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        isInitialization += 1
        basic.pause(500)
        basic.showLeds(`
            . # # # .
            # . . . #
            . # # # .
            # . . . #
            . . # . .
            `)
    }
})
