#!/bin/sh
echo "git sync"

cd /home/pi/GitHub/AirQualityIndex

git pull
git add *
git commit -m "data"
git push

