import serial
import time
import sys

port = serial.Serial("COM4", 9600)

print("Monitoring Dylos")
while True:
    with open("data.txt", "a") as f:
        data = time.ctime() + "," + port.readline().decode("utf-8").rstrip()
        f.write(data+'\n')
        print(data)
        sys.stdout.flush()