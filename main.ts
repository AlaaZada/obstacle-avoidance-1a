let distance = 0
basic.forever(function () {
    distance = Rover.Ultrasonic()
    if (distance >= 15) {
        Rover.Move(100)
    } else {
        led.plot(2, 3)
        Rover.MotorRunDual(-100, 100)
    }
})
