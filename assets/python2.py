import os
import sys

sys.stdout.write("[")
for filename in os.listdir("splash"):
    sys.stdout.write("'"+filename+"', ")
sys.stdout.write("]")
