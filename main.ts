let A = 0
let B = 0
let C = 0
let C_berekend = false
let C_8decimalen = 0
let C_str = ""
/**
 * vlag c_berekend start op false
 * 
 * knop a verhoogt a met 1 toont a korte pauze
 * 
 * knop b verhoogt b met 1 toont b korte pauze
 * 
 * schudden reset a b c en c_berekend korte pauze
 * 
 * knop a+b als c nog niet berekend
 * 
 * bereken c door wortel van a^2 plus b^2
 * 
 * rond c af op 8 decimalen
 * 
 * zet om naar tekst
 * 
 * toon elk teken traag scrollend
 * 
 * zet c_berekend op true
 * 
 * knop a+b als c al berekend
 */
input.onButtonPressed(Button.A, function () {
    A += 1
    basic.showNumber(A)
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
    if (!(C_berekend)) {
        C = Math.sqrt(A * A + B * B)
        C_8decimalen = Math.round(C * 100000000) / 100000000
        // zet om naar string
        C_str = "" + C_8decimalen + ""
        // scroll elke character traag
        for (let i = 0; i <= C_str.length - 1; i++) {
            basic.showString(C_str.charAt(i))
            // 0,3 sec per karakter
            basic.pause(300)
        }
        C_berekend = true
    } else {
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    B += 1
    basic.showNumber(B)
    basic.pause(500)
})
