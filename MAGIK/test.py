from __future__ import print_function
from PIL import Image


im = Image.open("9zDFJXV.png")
print(im.format, im.size, im.mode)
y=(500,500,600,600)
region = im.crop(y)
region.show()
