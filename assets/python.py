import os
from PIL import ImageFilter
from PIL import Image
from PIL import ImageEnhance

for filename in os.listdir("splash"):
    im = Image.open("splash/"+filename)
    im = im.filter(ImageFilter.GaussianBlur(radius=5))
    im = ImageEnhance.Brightness(im).enhance(0.8)
    filename = str(filename)[:-4]
    im.save("splashtest/"+filename+".jpg")
    print("done "+filename)
