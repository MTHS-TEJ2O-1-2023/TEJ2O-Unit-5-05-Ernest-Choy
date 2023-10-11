/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ernest
 * Created on: Oct 2023
 * This program ...
*/

let neoPixelStrip: neopixel.Strip = null

neoPixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

// cut all colors
neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neoPixelStrip.show()

input.onButtonPressed(Button.A, function() {
  neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
})