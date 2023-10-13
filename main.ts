/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ernest
 * Created on: Oct 2023
 * This program ...
*/

let neoPixelStrip: neopixel.Strip = null

neoPixelStrip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)

// cut all colors
neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neoPixelStrip.show()

//traffic light sequence
input.onButtonPressed(Button.A, function() {
  neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
  neoPixelStrip.show()
  pause(1000)
  neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
  neoPixelStrip.show()
  pause(1000)
  neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
  neoPixelStrip.show()
  pause(1000)
  basic.showIcon(IconNames.Happy)
  pause(2000)
  neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neoPixelStrip.show()
})
