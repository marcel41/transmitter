bluetooth.onBluetoothConnected(function () {
    servos.P0.setAngle(first_angle)
    servos.P1.setAngle(second_angle)
    gmap = Math.map(third_angle, 1, 0, 0, 180)
    servos.P2.setAngle(gmap)
    basic.showString("Y")
})
bluetooth.onBluetoothDisconnected(function () {
    servos.P0.setAngle(0)
    servos.P1.setAngle(0)
    servos.P2.setAngle(0)
    basic.showString("N")
})
let third_angle = 0
let second_angle = 0
let first_angle = 0
let gmap = 0
basic.showString("Hello")
gmap = 0
first_angle = 90
second_angle = 90
third_angle = 90
