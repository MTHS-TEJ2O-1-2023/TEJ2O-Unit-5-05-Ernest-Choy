"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program
"""

from microbit import *
import neopixel

neoPixelStrip = neopixel.NeoPixel(pin16, 4)

# cut all colors
neoPixelStrip[0] = (0, 0, 0)
neoPixelStrip[1] = (0, 0, 0)
neoPixelStrip[2] = (0, 0, 0)
neoPixelStrip.show()

# traffic light sequence
if button_a.is_pressed():
    neoPixelStrip[0] = (255, 0, 0)
    neoPixelStrip.show()
    sleep(1000)
    neoPixelStrip[0] = (0, 0, 0)
    neoPixelStrip[1] = (255, 255, 0)
    neoPixelStrip.show()
    sleep(1000)
    neoPixelStrip[0] = (0, 0, 0)
    neoPixelStrip[1] = (0, 0, 0)
    neoPixelStrip[2] = (0, 255, 0)
    neoPixelStrip.show()
    sleep(1000)
    display.show(Image.HAPPY)
    sleep(2000)
    neoPixelStrip[0] = (0, 0, 0)
    neoPixelStrip[1] = (0, 0, 0)
    neoPixelStrip[2] = (0, 0, 0)
    neoPixelStrip.show()
