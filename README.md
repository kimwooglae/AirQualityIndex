# AirQualityIndex



Python 학습
===========

byte를 string으로 변환
-----------------------
* http://stackoverflow.com/questions/606191/convert-bytes-to-a-python-string
```
>>> b"abcde"
b'abcde'

# utf-8 is used here because it is a very common encoding, but you
# need to use the encoding your data is actually in.
>>> b"abcde".decode("utf-8")
'abcde'
```

print() 자동 줄바꿈 제거
------------------------
* http://stackoverflow.com/questions/493386/how-to-print-in-python-without-newline-or-space
```
General way

import sys
sys.stdout.write('.')
You may also need to call

sys.stdout.flush()
to ensure stdout is flushed immediately.

Python 2.6+

From Python 2.6 you can import the print function from Python 3:

from __future__ import print_function
This allows you to use the Python 3 solution below.

Python 3

In Python 3, the print statement has been changed into a function. In Python 3, you can instead do:

print('.', end="")
This also works in Python 2, provided that you've used from __future__ import print_function.

If you are having trouble with buffering, you can flush the output by adding flush=True keyword argument:

print('.', end="", flush=True)
```


줄바꿈 제거
-----------
* http://stackoverflow.com/questions/275018/how-can-i-remove-chomp-a-newline-in-python
```
Try the rstrip method.

>>> 'test string\n'.rstrip()
'test string'
Note that Python's rstrip method strips all kinds of trailing whitespace by default, not just one newline as Perl does with chomp. To strip only newlines:

>>> 'test string \n\n'.rstrip('\n')
'test string '
There is also the lstrip and strip methods.

>>> s = " \n  abc   def   "
>>> s.strip()
'abc   def'
>>> s.rstrip()
' \n  abc   def'
>>> s.lstrip()
'abc   def   '
>>>
```



Reference
=======

* http://jaseywang.me/2015/11/01/can-venta-airwasher-effectively-reduce-pm2-5-or-pm10/
* http://jaseywang.me/2015/05/26/setup-a-aqiair-quality-index-monitoring-system-with-dylos-and-raspberry-pi-2/
* https://gist.github.com/jaseywang/6e2c9af226070c746394
* http://aqicn.org/faq/2013-09-08/dylos-air-particule-counter-experimentation-part-1/kr/
* http://aqicn.org/sensor/beijing/sanlitun/
* http://www.dylosproducts.com/downloads.html
* KW-525 linux driver : http://prolificusa.com/pl-2303hx-drivers/ 
* http://villagescience.org/running-raspberry-pi-usb-serial-ttl-adapter/
* https://www.raspberrypi.org/forums/viewtopic.php?p=575687
* https://www.raspberrypi.org/forums/viewtopic.php?p=90223