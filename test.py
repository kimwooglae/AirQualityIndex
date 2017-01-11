import serial
import time
import sys

port = serial.Serial("/dev/ttyUSB0", 9600)

while True:
  with open("data.txt", "a") as f:
    data = time.ctime() + "," +  port.readline()
    print data
    f.write(data)
    sys.stdout.flush()