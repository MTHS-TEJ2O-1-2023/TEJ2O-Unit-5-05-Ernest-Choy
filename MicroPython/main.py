"""
Created by: Ernest
Created on: Oct 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *
import neopixel

display.clear()
display.show(Image.HAPPY)

# cut all colors
np = neopixel.NeoPixel(pin16, 4)
np[0] = (255, 0, 0)
np[1] = (0, 255, 0)
np[2] = (0, 0, 255)
np.show()

# traffic light sequence
if button_a.is_pressed():
    np[0] = (255, 0, 0)
    np.show()
    sleep(1000)

    # show Yellow
    np[0] = (0, 0, 0)
    np[1] = (255, 255, 0)
    np.show()
    sleep(1000)

    # show green
    np[1] = (0, 0, 0)
    np[2] = (0, 255, 0)
    np.show()
    sleep(1000)
    # Clear Led
    display.show(Image.HAPPY)
    sleep(2000)
    np[2] = (0, 0, 0)
    np.show()
