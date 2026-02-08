let A = 0
let B = 0
let C = 0
let C_berekend = false

input.onButtonPressed(Button.A, function () {
    A += 1
    basic.showNumber(A)
    basic.pause(500)
})

input.onButtonPressed(Button.B, function () {
    B += 1
    basic.showNumber(B)
    basic.pause(500)
})

input.onGesture(Gesture.Shake, function () {
    A = 0
    B = 0
    C = 0
    C_berekend = false
    basic.pause(500)
})

input.onButtonPressed(Button.AB, function () {
    if (!C_berekend) {
        C = Math.sqrt(A * A + B * B)
        let C_8decimalen = Math.round(C * 100000000) / 100000000
        let C_str = C_8decimalen + ""  // zet om naar string

        // scroll elke character traag
        for (let i = 0; i < C_str.length; i++) {
            basic.showString(C_str.charAt(i))
            basic.pause(300) // 0,3 sec per karakter
        }

        C_berekend = true
    } else {
        basic.showString("Done")
        basic.pause(500)
    }
})
