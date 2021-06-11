// tests go here; this will not be compiled when this package is used as a library
basic.forever(function() {
    motorbit.motorRun(motorbit.Motors.MAll, motorbit.Dir.CW, 120)
    basic.pause(500)
    motorbit.motorStop(motorbit.Motors.MAll)
    basic.pause(500)
    motorbit.motorRun(motorbit.Motors.MAll, motorbit.Dir.CCW, 120)
    basic.pause(500)
    motorbit.motorStop(motorbit.Motors.MAll)
    basic.pause(500)
})