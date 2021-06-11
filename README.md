# pxt-yfrobot-motorbit -- MotorBit
YFROBOT MotorBit extension for makecode

[MotorBit is an easy-to-use motor drive expansion board for MicroBit](http://www.yfrobot.com.cn/wiki/index.php?title=Motor:Bit)

[MotorBit To Buy](https://item.taobao.com/item.htm?id=620974170340)

The YFROBOT Motor:Bit is an integrated motor driver and breakout board for the BBC micro:bit. With two integrated motor driver chip DRV8838, your micro:bit can drive two DC motors with 250mA max single channel current.

The Motor:Bit also features the “GVS” connectors, allowing for easy direct connection to compatible “GVS” sensors and outputs. Among these connectors, P0, P1 support sensors with 3.3V power voltage only; P2, P8, support 3.3V or 5V sensors, You can change the output voltage by jumper caps on the board.

## Basic usage

* Set the direction and speed of MotorBit motor

```blocks
 motorbit.motorRun(motorbit.Motors.ML, motorbit.Dir.CW, 120)
 motorbit.motorRun(motorbit.Motors.MR, motorbit.Dir.CCW, 120)
```

* Stop the MotorBit motor 

```blocks
motorbit.motorStop(motorbit.Motors.ML)
```

* Move forward

```blocks
motorbit.forward(128)
```

* Move back

```blocks
motorbit.back(128)
```

* Turn left

```blocks
motorbit.turnLeft(128)
```

* Turn right

```blocks
motorbit.turnRight(128)
```

* Read IR sensor value

```blocks
basic.showNumber(motorbit.irButtonCode())
```


## License

MIT

Copyright (c) 2021, YFROBOT  


## Supported targets

* for PXT/microbit
  (The metadata above is needed for package search.)