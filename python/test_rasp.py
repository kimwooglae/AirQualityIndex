import serial
import datetime
import sys

port = serial.Serial("/dev/ttyUSB0", 9600)

print("Monitoring Dylos")
while True:
    with open("data.txt", "a") as f:
    		
        data = datetime.datetime.today().strftime('%Y-%m-%d %H:%M:%S') + "," + port.readline().decode("utf-8").rstrip()
        f.write(data+'\n')
        print(data)
        sys.stdout.flush()