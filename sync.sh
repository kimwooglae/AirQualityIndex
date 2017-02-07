#!/bin/sh
echo "git sync"

git pull
git add *
git commit -m "data"
git push

